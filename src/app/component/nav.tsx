import Link from "next/link";
export default function Nav(){
    return(

        <header className="grid grid-cols-2 m-4 text-xl p-4"> 
            <div className="flex text-emerald-600">
                <Link href={""}>Nosh Nest</Link>
            </div>

            <nav className="flex justify-end gap-4 text-gray-600 mr-8 items-center">
                <Link href={""}>Home</Link>
                <Link href={""}>Menu</Link>
                <Link href={""}>About</Link>
                <Link href={""}>Contact</Link>
                <Link href={""} className="border-2 border-gray-600 rounded-full px-5">Login</Link>
            </nav>


        </header>
    )
}