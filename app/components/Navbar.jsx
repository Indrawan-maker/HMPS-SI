import img from "./images/logo.webp"
import  Image  from 'next/image';

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-transparent">
            <div className="flex justify-center items-center gap-2">
            <div className="w-12 h-12">
            <Image className="w-full h-full"
            src={img} alt="HMPS SI"/>
            </div>
            <h2 className="text-2xl font-extralight text-black font-serif">HMPS SI</h2>
            </div>
        </nav>
    )
}