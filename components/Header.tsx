import React from 'react'
import { Search } from './Search'

export const Header = () => {
  return (
    <div className="sticky top-0 z-10 flex h-[100px] w-full items-center justify-center border-b-[1px] border-[#e4e4e49a] bg-[#ffffffb0] backdrop-blur-[2px]">
      <Search />
    </div>
  )
}
