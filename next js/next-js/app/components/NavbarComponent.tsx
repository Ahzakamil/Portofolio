
import { TypingAnimation } from "@/components/ui/typing-animation";
import Image from "next/image";
import Link from "next/link";




const NavbarComponent = () => {


    return (
        <div className="flex justify-between ">
            <div className="flex justify-beetwen p-1 items-center gap-3">
                <Image src={"/Logo1.png"} alt="Logo web" width={150} height={110} />
                <div>
                    <h1 className="font-['montserrat'] text-[1.3rem] font-bold leading-tight">Arsip</h1>
                <p className="font-montserrat text-[0.8rem] font-[poppins]">  Perpustakaan digital</p>
                </div>
            </div>

          <div className="p-10">
            <div >
                <Link className="border border-black py-3 px-8 rounded-xl  bg-blue-700 text-white" href={"/pages/login"}>Masuk</Link>
               
            </div>
       </div>
        </div>
    )
};


export default NavbarComponent;
