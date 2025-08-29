import img from "./images/logo.webp"
import Image from 'next/image';

const Footer = () => {
    return (
        
        <footer>
            <section className="grid md:flex items-center justify-center mt-2 md:mt-16 ml-0 md:ml-22 mb-16 gap-6 p-4">
                <div className="min-w-74 min-h-74 md:w-160 md:h-80">
                    <iframe className="w-full h-full rounded-2xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31916.989153667164!2d117.07355967431641!3d-0.5660035999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df68180ac09ab79%3A0xc70cf2e7c7fe1f57!2sGedung%20Kuliah%20Dakwah%20dan%20Komunikasi%20UINSI!5e0!3m2!1sen!2sid!4v1756466736669!5m2!1sen!2sid" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="grid -mt-28 md:mt-0">
                    <h2 className="font-bold font-serif mb-2 text-gray-800">UINSI</h2>
                    <p className="text-sm md:text-sm text-gray-800 text-left min-w-72 md:max-w-xl leading-relaxed tracking-wide">Universitas Islam Negeri Sultan Aji Muhammad Idris Samarinda (UINSI Samarinda) merupakan perguruan tinggi Islam negeri yang memadukan penguasaan ilmu pengetahuan, teknologi, dan seni dengan pengembangan kepribadian islami yang kompeten serta berkarakter. Sebagai salah satu universitas Islam negeri di Indonesia, UINSI berkomitmen melahirkan generasi intelektual muslim yang unggul dalam bidang akademik, berakhlak mulia, serta siap berkontribusi dalam pembangunan bangsa dan peradaban.
                        Pada tahun 2021, UINSI Samarinda resmi berdiri berdasarkan Peraturan Presiden Republik Indonesia Nomor 17 Tahun 2021 tentang Perubahan Institut Agama Islam Negeri (IAIN) Samarinda menjadi Universitas Islam Negeri Sultan Aji Muhammad Idris Samarinda.</p>
                </div>
            </section>

            <section  className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
                <Image src={img} alt="sistem informasi" className="w-12 h-12"/>
                <p>
                    Sistem Informasi
                    <br />
                    Providing reliable tech since 2023
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Jurusan</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Fakultas</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </section>
        </footer>
    )
}
export default Footer;