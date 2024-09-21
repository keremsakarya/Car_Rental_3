import Image from "next/image"
import { Car } from "../types"
import gas from "@/app/assets/icons/gas.svg"
import mile from "@/app/assets/icons/mile.svg"
import arrow from "@/app/assets/icons/arr.svg"
import transmission from "@/app/assets/icons/transmission.svg"
import Link from "next/link"

type Props = {
    car: Car
}

const Card = ({ car }: Props) => {

    //* ekrana basaraken kod tekrarı oluşmaması için dizi tanımladık
    const arr = [
        {
            icon: mile,
            name: car.mileage + " Miles",
        },
        {
            icon: gas,
            name: car.fuelType,
        },
        {
            icon: transmission,
            name: car.transmission,
        },
    ]

    return (
        <div className="border shadow rounded hover:shadow-lg">
            <div className="relative h-[250px]">
                <Image
                    fill
                    src={car.imageUrl}
                    alt={car.make}
                    unoptimized
                    className="object-contain"
                />
            </div>

            <div className="py-5 px-10 sm:px-5">
                <h2 className="text-2xl font-semibold">
                    {car.make} {car.model}
                </h2>

                <hr className="border-[#E9E9E9] border-2 mt-2 mb-4" />

                <div className="flex justify-between">
                    {arr.map((item) => (
                        <div className="flex flex-col gap-2 items-center">
                            <Image src={item.icon} alt="icon" />
                            <p className="text-lg sm:text-base">{item.name}</p>
                        </div>
                    ))}
                </div>

                <hr className="border-[#E9E9E9] border-2 mt-4 mb-3" />

                <div className="flex justify-between text-3xl sm:text-xl">
                    <p className="font-semibold">${car.price}</p>
                    <Link href={`/car/${car._id}`} className="text-blue-500 text-2xl sm:text-xl flex items-center gap-2 hover:text-blue-800 transition">Detay
                        <Image src={arrow} alt="arrow" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card