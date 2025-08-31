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
            <div  className="w-280 h-120 bg-slate-700 justify-center rounded-4xl mt-16 relative shadow-2xl shadow-slate-800">
            <div className="absolute -left-20 bottom-48">
            <Image className="w-38 h-38 object-contain"
            src={logo} alt="hmps si"/>
            </div>
            </div>
        </section>
        </div>
    )
}