import { NextResponse } from "next/server";
import Vehicle from "../../(models)/Vehicle";

// type Params = {
//   params: {
//     id: string;
//   };
// };

export async function GET(req, { params }) {
    try {
        // veritbanından id'ye göre eleman çağırıyo
        const vehicle = await Vehicle.findById(params.id);

        if (!vehicle) {
            return NextResponse.json(
                {
                    message: "Araç bulunamadı",
                },
                { status: 404 }
            );
        }

        // frontde gönderilcek cevap
        return NextResponse.json(
            {
                message: "Aracın Detayları Gönderildi",
                vehicle,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Bir sorun oluştu",
            },
            { status: 500 }
        );
    }
}