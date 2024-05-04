'use client'
import {useState} from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSearch } from "react-icons/fa";

type Props = {}

export default function Navbar({}: Props) {
  const [isMenuDrop, setIsMenuDrop] = useState(false)
  const pathName = usePathname()

  function dropMenu(){
    setIsMenuDrop(val => !val)
  }

  return (
    <nav className='sticky top-0 z-10'>
      <div className='bg-black flex px-6 sm:px-10 lg:px-16 py-3 text-white justify-between items-center w-full max-w-full overflow-hidden'>
          <div className='flex items-center md:w-26'>
              <button onClick={dropMenu} className='flex-column mr-2 cursor-pointer hover:bg-slate-700 p-2 rounded-md hover:ease-in duration-300'>
                  <div className='border-t-2 border-white w-7'></div>
                  <div className='border-t-2 border-white w-7 mt-1'></div>
                  <div className='border-t-2 border-white w-7 mt-1'></div>
              </button>

              <h1 className='text-xl'>FIGURAN</h1>
          </div>

          <h1 className='text-xl'>Gallery</h1>

          <div className='flex items-center'>
              <input type="text" className='text-black rounded-md placeholder:text-sm px-2 md:w-40 w-24' placeholder='Search...' />
              <FaSearch className='text-2xl ml-1 text-black bg-white rounded-md p-1 cursor-pointer hover:bg-slate-400 hover:ease-in transition duration-150'/>
          </div>
      </div>

      {isMenuDrop &&
        <div className='flex flex-col justify-center items-center bg-black text-white border-t border-white pt-3 *:mb-2 absolute w-full'>
          <Link href={'/'} onClick={dropMenu} className={`${pathName == '/' ? 'underline' : 'hover:text-slate-400'} `}>Gallery</Link>
          <Link href={'/album'} onClick={dropMenu} className={`${pathName == '/album' ? 'underline' : 'hover:text-slate-400'}`}>Album</Link>
        </div>
      }
    </nav>
  )
}