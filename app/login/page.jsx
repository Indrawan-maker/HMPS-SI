import Navbar from './../components/Navbar';
import loginImg from "../components/images/login1.webp"
import loginLogo from "../components/images/loginLogo.webp"
import  Image  from 'next/image';


export default function Login() {
    return (
        <>
        <nav>
            <Navbar/>
        </nav>
        <main className='flex w-full h-screen bg-white justify-between'>
        <section className='flex flex-col w-2/5 h-full p-16 gap-16 font-poppins'>
        <div className='flex flex-row gap-6 mt-22'>
            <div className='w-16 h-16'>
            <Image src={loginLogo} alt="hmps si"className='w-full h-full object-cover'/>
            </div>
            <div className='flex flex-col justify-center'>
        <p className='font-bold text-2xl text-primary'>HMPS SI</p>
        <p className='text-gray-500 text-sm'>HMPSKu, HMPSMu, HMPS kita semua</p>
            </div>
        </div>
            <h1 className='text-base font-bold text-slate-600'>Masuk <br/>sebagai admin HMPS</h1>
            <form className='space-y-6'
            onSubmit="">
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold text-slate-600'
                    htmlFor="email">
                        Email
                    </label>
                    <input className='border px-4 py-3 w-full border-disable rounded-lg text-disable placeholder:text-disable placeholder:font-light text-sm'
                    name="email" 
                    type="email" placeholder='Masukkan email'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold text-slate-600'
                    htmlFor="password">
                        Password
                    </label>
                    <input className='border px-4 py-3 w-full border-disable rounded-lg text-disable placeholder:text-disable placeholder:font-light text-sm'
                    name="password" 
                    type="password" placeholder='Masukkan password'/>
                </div>
                <div className='flex flex-col gap-2 mt-10'>
                    <button className='bg-primary text-white px-4 py-2 rounded-2xl font-bold'
                    type="submit">
                        Masuk
                    </button>
                </div>
            </form>
        </section>
            <section className='w-3/5 h-full'>
                <Image src={loginImg} className='w-full h-full object-cover object-bottom'/>
            </section>
        </main>
        </>
    )
}