import { UserButton } from '@clerk/nextjs'
import { div } from 'motion/react-client'
import React from 'react'
import NavbarComponent from '../NavbarComponent'
import Image from "next/image";
import Link from "next/link";

const NavbarDashboard = () => {
  return (
    <>
<div className="flex justify-between ">
    <div className="flex justify-beetwen p-1 items-center gap-3">
      <Image src={"/Logo1.png"} alt="Logo web" width={150} height={110} />
         <div>
            <h1 className="font-['montserrat'] text-[1.3rem] font-bold leading-tight">Arsip</h1>
      <p className="font-montserrat text-[0.8rem] font-['poppins']">  Perpustakaan digital</p>
        </div>
         </div>
    <div className='flex text-center '>
    <div className=' gap-3 flex py-15 px-3'>
     <input type="search" placeholder="Cari..." className='border rounded-md p-2' />
      <UserButton />
    
    </div>
     </div>
     </div>
    </>
  )
}

export default NavbarDashboard