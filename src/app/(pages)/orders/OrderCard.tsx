import { Order } from "@/app/types"
import Image from "next/image"
import React from "react"
import { millify } from "millify"

const OrderCard = ({ order }: { order: Order }) => {
    return (
        <div className="border p-4 rounded-md gap-5 shadow items-center justify-between grid grid-cols-3 xl:grid-cols-5 hover:bg-zinc-100/10 transition cursor-pointer hover:shadow-lg">
            <Image
                width={200}
                height={200}
                src={order.product.imageUrl}
                alt="car"
                unoptimized
            />

            <h2>
                <span>{order.product.make}</span>
                <span className="font-bold mx-2">{order.product.model}</span>
            </h2>

            <p className="flex max-md:flex-col gap-1">
                <span className="whitespace-nowrap">Ödenen Tutar:</span>
                <span className="font-bold text-green-600">
                    {millify(order.money_spend)} ₺
                </span>
            </p>

            <p className="flex max-md:flex-col gap-1">
                <span className="whitespace-nowrap">Alım Tarihi:</span>
                <span className="font-bold text-blue-600">
                    {new Date(order.createdAt).toLocaleDateString()}
                </span>
            </p>

            <p className="flex max-md:flex-col gap-1">
                <span className="whitespace-nowrap">Ödeme Tipi:</span>
                <span className="font-bold text-blue-600">{order.type}</span>
            </p>
        </div>
    )
}

export default OrderCard