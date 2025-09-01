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
import  Image  from 'next/image';

export default function Member() {

    // const img = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];


    return (
        <div className="grid md:grid-cols-2 justify-center items-center max-w-280 gap-22 mx-auto">
        <section>
            <div className="flex items-center justify-center md:justify-start bg-slate-700 w-76 h-32 mx-auto  md:w-140 md:h-auto mb-2 md:mb-6 rounded-xl">
                <div className="w-30 h-32 md:w-38 md:h-46 rounded-tl-xl rounded-bl-xl overflow-hidden">
                <Image className="w-full h-full scale-180"
                src={img1} alt="hmps si"/>
                </div>
                <div className="ml-1 md:ml-4">
                    <div className="ml-10 md:ml-48 mt-1 md:mt-2 mb-1 md:mb-2">
                <h1 className="font-bold text-base md:text-xl font-serif">Ketua HIMA SI</h1>
                    </div>
                    <hr />
                <h4 className="font-bold text-sm md:text-base font-serif mb-1 mt-1 md:mb-6 md:mt-6">Muhammad Rizky Aditya</h4>
                <p className="text-sm">Ketua Himpunan</p>
                <div className="flex gap-1 md:gap-2">
                <FaInstagram className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
                />
                <AiOutlineLinkedin className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"/>
                </div>
                </div>
            </div>
        </section>
        <section>
            <div className="flex items-center justify-center md:justify-start bg-slate-700 w-76 h-32 mx-auto  md:w-140 md:h-auto mb-2 md:mb-6 rounded-xl">
                <div className="w-30 h-32 md:w-38 md:h-46 rounded-tl-xl rounded-bl-xl overflow-hidden">
                <Image className="w-full h-full scale-180"
                src={img1} alt="hmps si"/>
                </div>
                <div className="ml-1 md:ml-4">
                    <div className="ml-10 md:ml-48 mt-1 md:mt-2 mb-1 md:mb-2">
                <h1 className="font-bold text-base md:text-xl font-serif">Ketua HIMA SI</h1>
                    </div>
                    <hr />
                <h4 className="font-bold text-sm md:text-base font-serif mb-1 mt-1 md:mb-6 md:mt-6">Muhammad Rizky Aditya</h4>
                <p className="text-sm">Ketua Himpunan</p>
                <div className="flex gap-1 md:gap-2">
                <FaInstagram className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
                />
                <AiOutlineLinkedin className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"/>
                </div>
                </div>
            </div>
        </section>
        <section>
            <div className="flex items-center justify-center md:justify-start bg-slate-700 w-76 h-32 mx-auto  md:w-140 md:h-auto mb-2 md:mb-6 rounded-xl">
                <div className="w-30 h-32 md:w-38 md:h-46 rounded-tl-xl rounded-bl-xl overflow-hidden">
                <Image className="w-full h-full scale-180"
                src={img1} alt="hmps si"/>
                </div>
                <div className="ml-1 md:ml-4">
                    <div className="ml-10 md:ml-48 mt-1 md:mt-2 mb-1 md:mb-2">
                <h1 className="font-bold text-base md:text-xl font-serif">Ketua HIMA SI</h1>
                    </div>
                    <hr />
                <h4 className="font-bold text-sm md:text-base font-serif mb-1 mt-1 md:mb-6 md:mt-6">Muhammad Rizky Aditya</h4>
                <p className="text-sm">Ketua Himpunan</p>
                <div className="flex gap-1 md:gap-2">
                <FaInstagram className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
                />
                <AiOutlineLinkedin className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"/>
                </div>
                </div>
            </div>
        </section>
        <section>
            <div className="flex items-center justify-center md:justify-start bg-slate-700 w-76 h-32 mx-auto  md:w-140 md:h-auto mb-2 md:mb-6 rounded-xl">
                <div className="w-30 h-32 md:w-38 md:h-46 rounded-tl-xl rounded-bl-xl overflow-hidden">
                <Image className="w-full h-full scale-180"
                src={img1} alt="hmps si"/>
                </div>
                <div className="ml-1 md:ml-4">
                    <div className="ml-10 md:ml-48 mt-1 md:mt-2 mb-1 md:mb-2">
                <h1 className="font-bold text-base md:text-xl font-serif">Ketua HIMA SI</h1>
                    </div>
                    <hr />
                <h4 className="font-bold text-sm md:text-base font-serif mb-1 mt-1 md:mb-6 md:mt-6">Muhammad Rizky Aditya</h4>
                <p className="text-sm">Ketua Himpunan</p>
                <div className="flex gap-1 md:gap-2">
                <FaInstagram className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
                />
                <AiOutlineLinkedin className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"/>
                </div>
                </div>
            </div>
        </section>
        </div>
    )
}