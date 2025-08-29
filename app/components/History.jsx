import img from "./images/history.jpg"
import img2 from "./images/activity/lab.jpg"
import  Image  from 'next/image';
import { CiBookmarkCheck } from "react-icons/ci";

export default function History() {
    return (
        <main className="p-4 grid justify-center items-center w-full min-h-screen mt-18 mb-60">
            <div className="grid items-center justify-center mb-12">
                <h1 className="text-2xl md:text-6xl font-serif text-black text-center mb-8 font-extralight">HMPS SI Highlight</h1>
                <p className="text-lg md:text-sm text-gray-800 text-center max-w-90 md:max-w-4xl leading-relaxed"
                >Dengan website ini, kalian bisa memantau acara mendatang ataupun acara yang sedang berlangsung dari HMPS SI. Dan juga, kalian dapat mencari informasi mengenai jurusan Sistem Informasi, termasuk informasi tentang peminatan dan lain sebagainya.</p>
            </div>
            <div className="grid md:flex items-center justify-center gap-8 mt-12">
            <div className="w-90 h-90 md:w-140  md:h-80">
                <Image className="w-full h-full object-cover rounded-xl"
                src={img} alt="HMPS SI"/>
            </div>
            <div className="grid mb-38 tracking-wide">
            <h1 className="text-2xl md:text-4xl font-serif text-black text-left mb-4 font-extralight">HMPS SI</h1>
                <p className="text-sm md:text-sm text-gray-800 text-left max-w-90 md:max-w-xl leading-relaxed"
                >HMPS SI adalah organisasi yang bertujuan untuk memberikan wadah pengembangan diri melalui banyak kegiatan di dalamnya. Dan juga sebagai perantara seluruh mahasiswa Sistem Informasi untuk menyampaikan aspirasi serta saran mengenai program studi Sistem Informasi. Selain itu, HMPS SI juga berperan sebagai wadah untuk mempererat hubungan antar mahasiswa Sistem Informasi.</p>
                </div>
                </div>
                {/* pemisah */}
            <div className="grid md:flex items-center justify-center gap-8 mt-32">
            <div className="grid max-w-xl">
            <h1 className="text-2xl md:text-4xl font-serif text-black text-left mb-4 font-extralight">VISI & MISI</h1>
                <p className="text-sm md:text-sm text-gray-800 text-left max-w-90 md:max-w-xl leading-relaxed"
                >Menjadi Himpunan Mahasiswa Sistem Informasi yang unggul dan berdaya saing tinggi, serta mewujudkan rasa kekeluargaan yang kuat, saling mendukung, dan membangun lingkungan yang inklusif bagi semua anggota.</p>
                <ul className="text-black text-sm mt-2 max-w-3xl mb-2 tracking-wide">
                    <li className="flex items-center justify-start gap-4 mb-2"><CiBookmarkCheck className="w-12 h-12"/>
                    <div>
                    Meningkatkan kualitas pendidikan SDM Prodi Sistem Informasi dengan mengikuti kurikulum yang sudah diterapkan kampus
                    </div>
                    </li>
                    <li className="flex items-center justify-start gap-4 mb-2"><CiBookmarkCheck className="w-12 h-12"/>
                    <div>
                    Menciptakan suasana yang hangat dan akrab di antara anggota himpunan dengan seluruh masyarakat Teknik Informatika.
                    </div>
                    </li>
                    <li  className="flex items-center justify-start gap-4 mb-2"><CiBookmarkCheck className="w-12 h-12"/>
                    <div>
                    Menyelenggarakan program-program yang dapat memberikan ruang untuk bekerjasama antara pihak eksternal maupun internal.
                    </div>
                    </li>
                </ul>
                </div>
            <div className="w-90 h-90 md:w-140  md:h-80">
                <Image className="w-full h-full object-cover rounded-xl"
                src={img2} alt="HMPS SI"/>
            </div>
                </div>
        </main>
    )
}