"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const midNavLink = [
    {href : "/",label : "Home"},
    {href : "/menu",label : "Menu"},
    {href : "/about",label : "About"},
    {href : "/contact",label : "Contact"},
  
  ]
export default function Nav(){
    const pathName = usePathname();
    return(
        <header className="grid grid-cols-3 m-4 text-xl p-4"> 
            <div className="flex text-emerald-600">
                <Link href={"/"}>Nosh Nest</Link>
            </div>

            <div className="flex justify-center gap-6  mr-8 items-center">
                {midNavLink.map((link) =>{
                 const isActive =pathName.startsWith(link.href);
                  return (
                    <Link href={link.href} key= {link.label}  className={isActive ? "text-emerald-600" : "text-gray-600"}>{link.label}</Link>
                  )
                })}
                
            </div>

            <div className="flex justify-end gap-5 items-center">
                <Link href={"/login"}>Login</Link>
               
            </div>


        </header>

    )
    
}