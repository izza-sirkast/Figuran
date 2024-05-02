import React from 'react'
import { FaSearch } from "react-icons/fa";

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='bg-black flex sticky top-0 px-6 sm:px-10 lg:px-16 py-3 text-white justify-between items-center w-full max-w-full overflow-hidden'>
        <div className='flex items-center w-26'>
            <div className='flex-column mr-2 cursor-pointer hover:bg-slate-700 p-2 rounded-md hover:ease-in duration-300'>
                <div className='border-t-2 border-white w-7'></div>
                <div className='border-t-2 border-white w-7 mt-1'></div>
                <div className='border-t-2 border-white w-7 mt-1'></div>
            </div>

            <h1 className='text-xl'>FIGURAN</h1>
        </div>

        <h1 className='text-xl'>Gallery</h1>

        <div className='hidden md:flex items-center'>
            <input type="text" className='text-black rounded-md placeholder:text-sm px-2 w-40' placeholder='Search...' />
            <FaSearch className='text-2xl ml-1 text-black bg-white rounded-md p-1 cursor-pointer hover:bg-slate-400 hover:ease-in transition duration-150'/>
        </div>
    </nav>
  )
}