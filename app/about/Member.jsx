'use client'


import img1 from "../components/images/member/m1.webp"
import img2 from "../components/images/member/m2.webp"
import img3 from "../components/images/member/m3.webp"
import img4 from "../components/images/member/m4.webp"
import img5 from "../components/images/member/m5.webp"
import img6 from "../components/images/member/m6.webp"
import img7 from "../components/images/member/m7.webp"
import img8 from "../components/images/member/m8.webp"
import img9 from "../components/images/member/m9.webp"
import img10 from "../components/images/member/m10.webp"
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import AOS from "aos"
import { useEffect } from "react"


export default function Member() {

        useEffect(()=> {
            AOS.init({
                duration: 800,
                once: false,
            })
        },[])

    const data = [
        {
            img: img1,
            position: "Ketua HIMA SI",
            divisi: "Ketua Himpunan",
            name: "Abdul Rozaq"
        },
        {
            img: img2,
            position: "Wakil Ketua HIMA SI",
            divisi: "Wakil Ketua Himpunan",
            name: "Abdul Muzakkir"
        },
        {
            img: img3,
            position: "Sekretaris",
            divisi: "BPI - Sekretaris",
            name: "Abdul Terpadu"
        },
        {
            img: img4,
            position: "Sekretaris",
            divisi: "Kabid - Sekretaris",
            name: "Asri Calyani"
        },
        {
            img: img5,
            position: "Bendahara",
            divisi: "BPI - Bendahara",
            name: "Maysharah"
        },
        {
            img: img6,
            position: "Bendahara",
            divisi: "Kabid - Bendahara",
            name: "Naura"
        },
        {
            img: img7,
            position: "Pendidikan",
            divisi: "Staf - Pendidikan",
            name: "Abiyyu Cakra"
        },
        {
            img: img8,
            position: "Riset & Tech",
            divisi: "Staf - Riset & Tech",
            name: "Noviana Nur Shanty"
        },
        {
            img: img9,
            position: "Viskom",
            divisi: "Kabid - Viskom",
            name: "Diah Ayu"
        },
        {
            img: img10,
            position: "PSDM",
            divisi: "Staf - PSDM",
            name: "Marsela"
        }
    ]

    return (
        <div className="grid md:grid-cols-2 justify-center items-center  max-w-full md:max-w-280 gap-x-0 gap-y-1 md:gap-x-6 md:gap-y-1 mx-auto px-4 md:px-0">
            {data.map((item, index) => {
                return (
                    <section
                    key={index} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className="flex items-center md:justify-start bg-slate-700 min-w-86 max-w-96 h-32 md:w-135 md:max-w-140 md:h-auto mb-2 md:mb-6 rounded-xl">
                            <div className="w-30 h-32 md:w-38 md:h-46 rounded-tl-xl rounded-bl-xl overflow-hidden">
                                <Image className="w-full h-full scale-170 object-cover"
                                    src={item.img} alt="hmps si"
                                />
                            </div>
                            <div className="ml-4 md:ml-4">
                                <div className=" mt-1 md:mt-2 mb-1 md:mb-2">
                                    <h1 className="font-bold text-sm md:text-xl font-serif">{item.position}</h1>
                                </div>
                                <hr />
                                <h4 className="font-bold text-sm md:text-base font-serif mb-4 mt-1 md:mb-8 md:mt-1">{item.name}</h4>
                                <p className="text-sm mb-2 md:mb-0">{item.divisi}</p>
                                <div className="flex gap-1 md:gap-2">
                                    <FaInstagram className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
                                    />
                                    <AiOutlineLinkedin className="w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>
    )
}