import { redirect } from "next/navigation"

const Page = () => {
    redirect("/home")
    return <div>Home</div>
};

export default Page