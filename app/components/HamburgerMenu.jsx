import Image from "next/image";
import img from "./images/logo.webp"
import { Cross as Hamburger } from 'hamburger-react'
import { useState } from "react";
import Link from "next/link";


export default function HamburgerMenu() {
    const [isOpen, setOpen] = useState(false)
    console.log(isOpen)
    return (
        <>
            <aside className={isOpen ? "overflow-hidden" : ''}>
                <Hamburger toggled={isOpen} toggle={setOpen} size={38} duration={0.9} distance="sm" color="#000000" label="Show menu" easing="ease-in" direction="left" hideOutline={false}
                />
                {isOpen &&
                    <div className="absolute top-0 left-0 w-full h-screen p-4 text-black bg-slate-50">
                        <header className="flex items-center justify-between py-1 md:px-4 px-0">
                            <div className="flex justify-start items-center gap-2">
                                <div className="w-10 h-10 md:w-12 md:h-12">
                                    <Image className="w-full h-full"
                                        src={img} alt="HMPS SI" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-extralight text-black font-serif">HMPS SI</h2>
                            </div>
                            <Hamburger toggled={isOpen} toggle={setOpen} size={38} duration={0.9} distance="sm" color="#000000" label="Show menu" easing="ease-in" direction="left" hideOutline={false}
                            />
                        </header>
                        <main className="flex justify-center items-center h-screen text-xl md:text-4xl text-center font-serif">
                            <ul>
                                <li className="mb-4 md:mb-12 cursor-pointer"><Link href='/' className="block">Beranda</Link></li>
                                <li className="mb-4 md:mb-12">
                                    <Link href='/about' className="block">Tentang kami</Link>
                                </li>
                                <li className="mb-22">Kontak</li>
                            </ul>
                        </main>
                    </div>}
            </aside>
        </>
    )
}