import Link from "next/link"
import Container from "./Container"

const Header = ({ designs }: { designs?: string }) => {
    return (
        <header className={` w-full text-black ${designs}`}>
            <Container designs="flex justify-between items-center w-full">
                <h1 className="font-bold text-2xl md:text-3xl">
                    <Link href="/home">DRIVE</Link>
                </h1>

                <nav className="text-sm md:text-base flex gap-2 md:gap-4">
                    <Link href="/home">Keşfet</Link>
                    <Link href="/orders">Siparişlerim</Link>
                    <Link href="/home">Hakkımızda</Link>
                    <Link className="max-md:hidden" href="/home">Fiyatlandırma</Link>
                </nav>

                <div className="flex gap-2">
                    <button className="max-md:hidden">İletişim</button>
                    <button className="bg-white text-black rounded-full px-5 py-2 text-nowrap transition hover:bg-gray-100">Kayıt Ol</button>
                </div>
            </Container>
        </header>
    )
}

export default Header