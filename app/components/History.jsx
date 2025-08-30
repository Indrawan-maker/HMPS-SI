'use client'


import img from "./images/activity/ketua.jpg"
import img2 from "./images/activity/lab.jpg"
import Image from 'next/image';
import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'
import { CiBookmarkCheck } from "react-icons/ci";
import Avatar from "./lib/Avatar";

export default function History() {

    useEffect(()=> {
        AOS.init({
            duration: 800,
            once: false,
        })
    },[])
    return (
        <main className="p-4 grid justify-center items-center w-full min-h-screen mt-18 mb-2 md:mb-60">
            <div className="grid items-center justify-center mb-18" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <h1 className="text-2xl md:text-6xl font-serif text-black text-center mb-8 font-extralight">HMPS SI Highlight</h1>
                <p className="text-sm md:text-sm text-gray-800 text-center max-w-80 md:max-w-4xl leading-relaxed"
                >Dengan website ini, kalian bisa memantau acara mendatang ataupun acara yang sedang berlangsung dari HMPS SI. Dan juga, kalian dapat mencari informasi mengenai jurusan Sistem Informasi, termasuk informasi tentang peminatan dan lain sebagainya.</p>
            </div>
            <div className="grid md:flex items-center justify-center gap-8 mt-12">
                <div className="min-w-74 min-h-74 md:w-140  md:h-80" 
                data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <Image className="w-full h-full object-cover rounded-xl object-top custom-image-position"
                        src={img} alt="HMPS SI" />
                </div>
                <div className="grid mb-16 md:mb-38 tracking-wide -mt-4 md:mt-28" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h1 className="text-2xl md:text-4xl font-serif text-black text-left mb-4 font-extralight">HMPS SI</h1>
                    <p className="text-sm md:text-sm text-gray-800 text-left min-w-74 md:max-w-xl leading-relaxed mb-6"
                    >HMPS SI adalah organisasi yang bertujuan untuk memberikan wadah pengembangan diri melalui banyak kegiatan di dalamnya. Dan juga sebagai perantara seluruh mahasiswa Sistem Informasi untuk menyampaikan aspirasi serta saran mengenai program studi Sistem Informasi. Selain itu, HMPS SI juga berperan sebagai wadah untuk mempererat hubungan antar mahasiswa Sistem Informasi.</p>
                <div className="flex justify-between items-center">
                    <button className="rounded-md font-bold bg-slate-500 w-32 h-10 cursor-pointer text-sm">Tentang kami</button>
                    <Avatar />
                </div>
                </div>
            </div>
            {/* pemisah */}
            <div className="grid md:flex items-center justify-center gap-8 mt-0 md:mt-32">
                <div className="grid max-w-xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h1 className="text-2xl md:text-4xl font-serif text-black text-left mb-4 font-extralight">VISI & MISI</h1>
                    <p className="text-sm md:text-sm text-gray-800 text-left min-w-74 md:max-w-xl leading-relaxed"
                    >Menjadi Himpunan Mahasiswa Sistem Informasi yang unggul dan berdaya saing tinggi, serta mewujudkan rasa kekeluargaan yang kuat, saling mendukung, dan membangun lingkungan yang inklusif bagi semua anggota.</p>
                    <ul className="text-black text-sm mt-2 max-w-3xl mb-2 tracking-wide">
                        <li className="flex items-center justify-start gap-4 mb-2"><CiBookmarkCheck className="w-12 h-12" />
                            <div>
                                Meningkatkan kualitas pendidikan SDM Prodi Sistem Informasi dengan mengikuti kurikulum yang sudah diterapkan kampus
                            </div>
                        </li>
                        <li className="flex items-center justify-start gap-4 mb-2"><CiBookmarkCheck className="w-12 h-12" />
                            <div>
                                Menciptakan suasana yang hangat dan akrab di antara anggota himpunan dengan seluruh masyarakat Sistem Informasi.
                            </div>
                        </li>
                        <li className="flex items-center justify-start gap-4 mb-2"><CiBookmarkCheck className="w-12 h-12" />
                            <div>
                                Menyelenggarakan program-program yang dapat memberikan ruang untuk bekerjasama antara pihak eksternal maupun internal.
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="min-w-74 min-h-74 md:w-140  md:h-80" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <Image className="w-full h-full object-cover rounded-xl"
                        src={img2} alt="HMPS SI" />
                </div>
            </div>
        </main>
    )
}