import { NextResponse } from "next/server";
import Order from "../(models)/Order";

export const GET = async () => {
    try {
        const orders = await Order.find().populate("product");

        return NextResponse.json({
            text: "Siparişler başarıyla alındı",
            orders,
        });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
};