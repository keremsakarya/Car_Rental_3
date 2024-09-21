import Header from "@/app/components/Header"
import BreadCrumb from "./BreadCrumb"
import Container from "@/app/components/Container"
import { Car } from "@/app/types";
import Images from "./Images";
import Title from "./Title";
import Overview from "./Overview";
import OrderBox from "./OrderBox";

type Props = {
    params: { id: string }
}

type ResType = {
    message: string
    vehicle: Car
}

const getDetail = async (id: string): Promise<ResType> => {
    const res = await fetch(`http://localhost:3000/api/vehicles/${id}`)

    return res.json()
}

const Page = async ({ params }: Props) => {

    const data = await getDetail(params.id)
    console.log(data)

    return (
        <div>
            <Header designs="bg-black text-white" />

            <Container designs="mt-5">
                <BreadCrumb car={data.vehicle} />

                <Title car={data.vehicle} />

                <Images url={data.vehicle.imageUrl} />

                <div className="grid xl:grid-cols-5 gap-x-10 my-10">
                    <div className="xl:col-span-3">
                        <Overview car={data.vehicle} />
                    </div>
                    <OrderBox car={data.vehicle} />
                </div>
            </Container>
        </div>
    )
}

export default Page