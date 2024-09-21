import { NextResponse } from "next/server";
import Vehicle from "../(models)/Vehicle";

export async function GET() {
    try {
        // veritabnından bütün araçları al
        const vehicles = await Vehicle.find();

        // clienta gönder
        return NextResponse.json({
            message: "Araçlar bulundu",
            data: vehicles,
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            {
                message: "Araça verilerini alırken bir sorun oluştu",
            },
            { status: 500 }
        );
    }
}