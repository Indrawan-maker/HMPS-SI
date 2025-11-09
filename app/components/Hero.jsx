import Image from 'next/image';
import img from './images/hero.webp'
import Navbar from "./Navbar";


export default function Hero() {
    return (
        <main className="w-full min-h-screen relative">
            < Navbar/>
            <Image className="absolute inset-0 w-full h-full object-cover"
                src={img} alt="hmps_uinsi" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white/90"></div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
                <h1 className={`text-6xl md:text-8xl font-serif text-black text-center mb-8 font-extralight`}>
                    Himpunan Mahasiswa <br /> Sistem Informasi
                </h1>
                <p className="text-lg md:text-xl text-gray-800 text-center max-w-3xl leading-relaxed tracking-wide">
                    Tempat bagi mahasiswa yang ingin mengembangkan kemampuan di bidang teknologi dan informasi. Di sini, kita belajar bagaimana merancang sistem, membangun inovasi digital, serta menciptakan solusi yang memberikan manfaat nyata bagi masyarakat.
                </p>
            </div>
            <hr className="relative z-20 border-t-2 border-gray-300 w-3/4 mx-auto my-8 rounded-full"/>
        </main>
    )
}