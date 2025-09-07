import Navbar from './../components/Navbar';
import loginImg from "../components/images/login.webp"
import loginLogo from "../components/images/loginLogo.webp"
import  Image  from 'next/image';


export default function Login() {
    return (
        <>
        <nav>
            <Navbar/>
        </nav>
        <main className='flex w-full min-h-full bg-white justify-between'>
        <section className='flex flex-col w-2/5 h-full p-16 gap-16 font-poppins'>
        <div className='flex flex-row gap-6'>
            <div className='w-22 h-22'>
            <Image src={loginLogo} alt="hmps si"className='w-full h-full'/>
            </div>
            <div className='flex flex-col justify-center'>
        <p className='font-bold text-2xl text-primary'>HMPS SI</p>
        <p className='text-gray-500 text-sm'>HMPSKu, HMPSMu, HMPS kita semua</p>
            </div>
        </div>
            <h1 className='text-xl font-bold text-slate-600'>Masuk <br/>sebagai Admin HMPS</h1>
            <form className='space-y-6'
            onSubmit="">
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold text-slate-600'
                    htmlFor="email">Email
                    </label>
                    <input className='border '
                    name="email" 
                    type="email" placeholder='Masukkan email'/>
                </div>
            </form>
        </section>
        </main>
        </>
    )
}