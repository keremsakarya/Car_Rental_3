import Container from "@/app/components/Container"
import Header from "@/app/components/Header"
import { Order } from "@/app/types"
import { headers } from "next/headers"
import OrderCard from "./OrderCard"

const host = headers().get("host")
const protocol = headers().get("x-forwarded-proto")

const baseUrl = `${protocol}://${host}`

type ResType = {
    message: string
    orders: Order[]
}

const getOrders = async (): Promise<ResType> => {
    const res = await fetch(`${baseUrl}/api/orders`, {
        cache: "no-store"
    })

    return res.json()
}

const Page = async () => {

    const data = await getOrders()

    return (
        <div>
            <Header />

            <Container>

                <h2 className="mb-10 text-4xl font-bold">Siparişlerin</h2>

                <div className="grid gap-10">
                    {data.orders.map((order, key) => (
                        <OrderCard order={order} key={key} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Page