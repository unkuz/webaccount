'use client'
import CartHeaderIcon from '@/assets/svgs/cart-header-icon.svg'
import Image from 'next/image'
import { useState } from 'react'
import { Search } from './Search'
import Link from 'next/link'

export const Header = () => {
  const [numItems, setNumItems] = useState<number>(5)

  return (
    <header className="fixed left-0 top-0 z-10 h-[100px] w-full bg-[#ffffffb0] backdrop-blur-[2px]">
      <div className="mx-auto h-full w-full max-w-[1280px] sm:px-[25px] md:px-[35px] lg:px-[50px]">
        <div className="flex h-full w-full items-center justify-between border-b-[2px] border-[#e4e4e49a] px-[10px]">
          <Link
            href="/"
            className="rotate-[-15deg] cursor-pointer select-none text-[38px] font-bold"
          >
            E
          </Link>
          <Search />
          <button className="relative cursor-pointer select-none">
            <Image src={CartHeaderIcon} alt="Giỏ hàng" title="Giỏ hàng" />
            <div className="absolute bottom-[-5px] right-0 h-[15px] rounded-[15px] bg-[#000] px-[4px] text-[10px] font-bold text-white">
              {numItems > 10 ? '10+' : numItems}
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
