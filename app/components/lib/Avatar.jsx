import img1 from "../images/member/m1.webp"
import img2 from "../images/member/m2.webp"
import img3 from "../images/member/m6.webp"
import Image from 'next/image';

export default function Avatar() {
    return (
        <>
            <div className="avatar-group -space-x-6">
                <div className="avatar">
                    <div className="w-12">
                        
                        <Image className="transition-transform duration-500 scale-140 w-full h-full object-cover"
                        src={img1} alt="hmps si" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                        <Image className="transition-transform duration-500 scale-170 w-full h-full object-cover"
                        src={img3} alt="hmps si" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                        <Image className="transition-transform duration-500 scale-180 w-full h-full object-cover"
                        src={img2} alt="hmps si" />
                    </div>
                </div>
                <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-12">
                        <span>+22</span>
                    </div>
                </div>
            </div>
        </>
    )
}