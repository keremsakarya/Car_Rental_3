import Image from "next/image"
import pp from "@/app/assets/pp.png"
import loc from "@/app/assets/icons/loc.svg"
import tel from "@/app/assets/icons/tel.svg"
import OrderButton from "./OrderButton"
import { Car } from "@/app/types"

const OrderBox = ({ car }: { car: Car }) => {
    return (
        <div className="border shadow rounded-md p-5 max-xl:mt-10 w-full xl:col-span-2">
            <div className="flex gap-5">
                <Image src={pp} alt="profile" />

                <div className="text-xl">
                    <h2 className="font-semibold">Zıppır Galeri</h2>
                    <p>Kırklareli, Lüleburgaz</p>
                </div>
            </div>

            <div className="flex justify-between my-5">
                <div className="flex gap-1 items-center cursor-pointer">
                    <Image src={loc} alt="loc" />
                    <p>Lokasyonu Gör</p>
                </div>

                <div className="flex gap-1 items-center cursor-pointer">
                    <Image src={tel} alt="tel" />
                    <p>+90 666 777 88 99</p>
                </div>
            </div>

            <OrderButton car={car} />

            <div className="bg-green-500 w-full text-center  p-2 rounded-lg text-white font-bold transition hover:bg-green-600 mt-5 cursor-pointer">
                <a href="https://wa.me/906667778899">Whatsapp</a>
            </div>
        </div>
    )
}

export default OrderBox