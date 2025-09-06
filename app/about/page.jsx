import Navbar from "../components/Navbar";
import Image from 'next/image';
import logo from '../components/images/logo.webp';
import { CiBookmarkCheck } from "react-icons/ci";
import Member from "./Member"
import Footer from "../components/Footer";


export default function About() {
    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <nav className="">
                <Navbar />
            </nav>
            <section className="grid md:flex items-center justify-center px-4 md:px-0">
                <div className="min-w-46 max-w-280 h-auto bg-slate-700 justify-center rounded-4xl mt-62 md:mt-16 relative shadow-2xl shadow-slate-800 grid md:flex">
                    <div className="absolute md:-left-20 left-1/2 -translate-x-1/2 md:translate-x-0  md:right-0 -top-20 md:top-38">
                        <Image className="w-38 h-38 object-contain"
                            src={logo} alt="hmps si" />
                    </div>
                    <div className="px-8 md:px-18 py-8 mt-12 md:mt-0 ">
                        <h1 className="font-serif text-2xl font-bold mb-4">HMPS SI</h1>
                        <p className="mb-4">Himpunan Mahasiswa Sistem Informasi</p>
                        <p className="mb-6">HIMA SI adalah organisasi yang terdiri dari mahasiswa program studi Sistem Informasi, dengan tujuan untuk memberikan wadah pengembangan diri melalui banyak kegiatan di dalamnya. Dan juga sebagai perantara seluruh mahasiswa Sistem Informasi untuk menyampaikan aspirasi serta saran mengenai program studi Sistem Informasi. Selain itu, HIMA SI juga berperan sebagai wadah untuk mempererat hubungan antar mahasiswa Sistem Informasi.</p>
                        <h1 className="font-serif text-2xl font-bold mb-4">VISI & MISI</h1>
                        <p className=" mb-4">Menjadi Himpunan Mahasiswa Sistem Informasi yang unggul dan berdaya saing tinggi, serta mewujudkan rasa kekeluargaan yang kuat, saling mendukung, dan membangun lingkungan yang inklusif bagi semua anggota.</p>
                        <ul className="text-sm mt-2 max-w-5xl mb-2 tracking-wide">
                            <li className="flex items-center justify-start gap-4 mb-1"><CiBookmarkCheck className="w-22 h-22 md:w-8 md:h-8" />
                                <div>
                                    Meningkatkan kualitas pendidikan SDM Prodi Sistem Informasi dengan mengikuti kurikulum yang sudah diterapkan kampus.
                                </div>
                            </li>
                            <li className="flex items-center justify-start gap-4 mb-1"><CiBookmarkCheck className="w-22 h-22 md:w-8 md:h-8" />
                                <div>
                                    Menciptakan suasana yang hangat dan akrab di antara anggota himpunan dengan seluruh masyarakat Sistem Informasi.
                                </div>
                            </li>
                            <li className="flex items-center justify-start gap-4 mb-1"><CiBookmarkCheck className="w-22 h-22 md:w-8 md:h-8" />
                                <div>
                                    Menyelenggarakan program-program yang dapat memberikan ruang untuk bekerjasama antara pihak eksternal maupun internal.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="mt-12 flex items-center justify-center mb-64">
                <Member />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}