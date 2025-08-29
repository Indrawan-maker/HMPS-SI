import { cantata } from "../layout";
import Image from 'next/image';
import img from './images/hero.jpg'
import Navbar from "./Navbar";


export default function Hero() {
    return (
        <main className="w-full min-h-screen relative">
            < Navbar/>
            <Image className="absolute inset-0 w-full h-full object-cover"
                src={img} alt="hmps_uinsi" />
            <div class="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white/90"></div>

            <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
                <h1 class={`text-6xl md:text-8xl font-serif text-black text-center mb-8 font-extralight`}>
                    Welcome to<br />HMPS SI
                </h1>
                <p class="text-lg md:text-xl text-gray-800 text-center max-w-3xl leading-relaxed tracking-wide">
                    On our campus, world-class faculty and talented students come together to
                    create a better world through groundbreaking research, cutting-edge
                    innovations, and transformative scholarly work.
                </p>
            </div>
            <hr className="relative z-20 border-t-2 border-gray-300 w-3/4 mx-auto my-8 rounded-full"/>
        </main>
    )
}