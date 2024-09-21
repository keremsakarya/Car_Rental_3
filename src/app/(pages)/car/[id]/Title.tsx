import { Car } from "@/app/types"
import mile from "@/app/assets/icons/mile.svg"
import gas from "@/app/assets/icons/gas.svg"
import year from "@/app/assets/icons/year.svg"
import transmission from "@/app/assets/icons/transmission.svg"
import millify from "millify"
import Image from "next/image"

const Title = ({ car }: { car: Car }) => {

    const arr = [
        {
            icon: year,
            name: car.year,
        },
        {
            icon: mile,
            name: millify(+car.mileage) + " Miles",
        },
        {
            icon: transmission,
            name: car.transmission,
        },
        {
            icon: gas,
            name: car.fuelType,
        },
    ]

    return (
        <div className="mt-10 flex justify-between">
            <div>
                <h1 className="font-bold text-3xl md:text-4xl">
                    {car.make} {car.model}
                </h1>

                <div className="flex gap-5 mt-5">
                    {arr.map((item) => (
                        <div className="py-1 px-3 rounded-full bg-blue-500/30 flex gap-1 items-center md:mb-5">
                            <Image width={15} height={15} src={item.icon} alt="icon" />

                            <span className="text-xs md:text-base">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="font-semibold text-3xl md:text-4xl">
                ${car.price.toLocaleString()}
            </div>
        </div>
    )
}

export default Title