import Card from "@/app/components/Card"
import Container from "../../../components/Container"
import { Car } from "@/app/types"
import { headers } from "next/headers"

const host = headers().get("host")
const protocol = headers().get("x-forwarded-proto")

const baseUrl = `${protocol}://${host}`

type ReturnType = {
    message: string
    data: Car[]
}

const getCars = async (): Promise<ReturnType> => {
    try {
        const res = await fetch(`${baseUrl}/api/vehicles`)

        return res.json()
    } catch (err) {
        throw new Error("Verileri alırken bir sorun oluştu")
    }
}

const List = async () => {

    const { data } = await getCars()

    return (
        <Container>
            <h1 className="text-2xl md:text-3xl font-bold">Bütün Araçları Keşfedin</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {data.map((car) => (
                    <Card car={car} />
                ))}
            </div>
        </Container>
    )
}

export default List