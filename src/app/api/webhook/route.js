import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Order from "../(models)/Order";

const stripe = require("stripe")(process.env.STRIPE_KEY);

// next'js in body'i işleme özleliğini kapat
export const config = {
    api: {
        bodyParser: false,
    },
};

// Eğer ödeme başarılı olursa stripe buraya post isteği atıcak bizde ödemenin başarılı olduğunu anlayıp gerekli güncellemleri yapabilicez
export async function POST(req) {
    //1) isteğin body kısmını text'e çevir
    const body = await req.text();

    //2) gerekli headera ulaş
    const signature = headers().get("stripe-signature");

    let event;

    //3) gerçekleşen ödeme ile alakalı verilere eriş
    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.WEBHOOK_KEY
        );
    } catch (err) {
        return NextResponse.json({ message: "Webhook başarısız" }, { status: 500 });
    }

    // 4) ödeme başarılı oluysa satın alınna ürünün veirlerine eriş
    if (event.type === "checkout.session.completed") {
        // ödeme verileri
        const session = event.data.object;

        // bu ödeme oturumunda satın alınan ürünlere eriş
        const line_items = await stripe.checkout.sessions.listLineItems(session.id);

        // ürünün catalog verisine eriş
        const item = await stripe.products.retrieve(
            line_items.data[0].price.product
        );

        // kendi veritabanımız eklenceik sipariş verisi oluştur
        const orderItem = {
            product: item.metadata.product_id,
            money_spend: line_items.data[0].amount_total,
            currency: line_items.data[0].price.currency,
            type: line_items.data[0].price.type,
        };

        // satın alınan ürünü siparişler kolleksiyonuna ekle
        await Order.create(orderItem);

        // client'a olumlu cevap gönder
        return NextResponse.json(
            {
                status: "success",
            },
            { status: 200 }
        );
    }

    // client'a olumsuz cevap gönder
    return NextResponse.json(
        {
            status: "fail",
        },
        { status: 500 }
    );
}