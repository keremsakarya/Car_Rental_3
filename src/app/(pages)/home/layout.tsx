import Header from "@/app/components/Header";

const Layout = ({
    children,
    list,
}: {
    children: JSX.Element | JSX.Element[]
    list: JSX.Element
}) => {
    return (
        <div>
            <Header designs="absolute text-white" />
            {children}
            {list}
        </div>
    )
}

export default Layout