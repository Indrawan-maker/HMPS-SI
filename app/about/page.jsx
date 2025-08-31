import Navbar from "../components/Navbar";
import  Image  from 'next/image';
import  logo  from '../components/images/logo.webp';


export default function About() {
    return (
        <div className="bg-gray-100 min-h-screen w-screen">
        <nav className="">
            <Navbar />
        </nav>
        <section className="flex items-center justify-center">
            <div  className="w-280 h-120 bg-slate-700 justify-center rounded-4xl mt-16 relative shadow-2xl shadow-slate-800 flex">
            <div className="absolute -left-20 bottom-48">
            <Image className="w-38 h-38 object-contain"
            src={logo} alt="hmps si"/>
            </div>
            <div className="">
            <h1 className="font-serif text-2xl font-bold mb-4">HMPS SI</h1>
            <p className="">Himpunan Mahasiswa Sistem Informasi</p>
            <p>HIMA SI adalah organisasi yang terdiri dari mahasiswa program studi Sistem Informasi, dengan tujuan untuk memberikan wadah pengembangan diri melalui banyak kegiatan di dalamnya. Dan juga sebagai perantara seluruh mahasiswa Sistem Informasi untuk menyampaikan aspirasi serta saran mengenai program studi Teknik Informatika. Selain itu, HIMA SI juga berperan sebagai wadah untuk mempererat hubungan antar mahasiswa Sistem Informasi.</p>
            </div>

            </div>
        </section>
        </div>
    )
}