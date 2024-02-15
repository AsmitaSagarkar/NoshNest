import GoogleIcon from '@mui/icons-material/Google';
export default function RegisterPage(){
    return(
        <>
        <h1 className='text-center text-emerald-700 font-bold text-4xl font-serif mb-10'>Registeration Page</h1>

        <div className='flex flex-col justify-center items-center gap-6'>
        <form className='flex flex-col gap-6 text-2xl '>
            <div className='flex flex-col items-center justify-center gap-5'>
            <input type="email" placeholder="Enter Your Email" className='text-left border-4 border-emerald-700 rounded-xl w-96 placeholder:text-gray-700' />
            <input type="password" placeholder="Enter Your Password" className='text-left border-4 border-emerald-700 rounded-xl w-96 placeholder:text-gray-700' />
            </div>
            <button type="submit" className='bg-emerald-700 text-white rounded-xl p-1'>Register</button>

            <div className='text-center'>Or login with Provider</div>

            <button className='flex flex-row justify-center items-center gap-2 text-gray-700 border-4 rounded-xl border-emerald-700'><GoogleIcon />Login With Google</button>
        </form>
        
        </div>
        </>
    )
}