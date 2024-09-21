import { Car } from "@/app/types"
import Link from "next/link"

const BreadCrumb = ({ car }: { car: Car }) => {
    return (
        <div>
            <Link className="text-blue-500" href="/home">Anasayfa</Link> / <span>Arabalar</span> / <span>{car.make} {car.model}</span>
        </div>
    )
}

export default BreadCrumb