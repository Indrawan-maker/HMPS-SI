import img from "./images/logo.webp"
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <section className="flex items-center justify-center mt-16 ml-22 mb-16 gap-6">

                <div className="w-160 h-80">
                    <iframe className="w-full h-full rounded-2xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31916.989153667164!2d117.07355967431641!3d-0.5660035999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df68180ac09ab79%3A0xc70cf2e7c7fe1f57!2sGedung%20Kuliah%20Dakwah%20dan%20Komunikasi%20UINSI!5e0!3m2!1sen!2sid!4v1756466736669!5m2!1sen!2sid" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="grid">
                    <h2 className="font-bold font-serif mb-2">UINSI</h2>
                    <p className="text-sm md:text-sm text-gray-800 text-left max-w-xl leading-relaxed">Universitas Islam Negeri Sultan Aji Muhammad Idris Samarinda (UINSI Samarinda) merupakan perguruan tinggi Islam negeri yang memadukan penguasaan ilmu pengetahuan, teknologi, dan seni dengan pengembangan kepribadian islami yang kompeten serta berkarakter. Sebagai salah satu universitas Islam negeri di Indonesia, UINSI berkomitmen melahirkan generasi intelektual muslim yang unggul dalam bidang akademik, berakhlak mulia, serta siap berkontribusi dalam pembangunan bangsa dan peradaban.
                        Pada tahun 2021, UINSI Samarinda resmi berdiri berdasarkan Peraturan Presiden Republik Indonesia Nomor 17 Tahun 2021 tentang Perubahan Institut Agama Islam Negeri (IAIN) Samarinda menjadi Universitas Islam Negeri Sultan Aji Muhammad Idris Samarinda.</p>
                </div>
            </section>

            <aside>
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="fill-current">
                    <path
                        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
                <p>
                    ACME Industries Ltd.
                    <br />
                    Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
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
        </footer>
    )
}
export default Footer;