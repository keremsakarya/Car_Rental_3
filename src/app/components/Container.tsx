type Props = {
    children: JSX.Element | JSX.Element[]
    designs?: string
}

const Container = ({ children, designs }: Props) => {
    return (
        <div className={`py-5 md:py-10 px-5 md:px-10 lg:px-20 max-w-[1440px] mx-auto ${designs}`}>
            {children}
        </div>
    )
}

export default Container