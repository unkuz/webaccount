import SearchIcon from '@/assets/svgs/search-icon.svg'
import Image from 'next/image'

export const Search = () => {
  return (
    <div className="flex h-[55px] w-[500px] overflow-hidden rounded-[15px] border-[2px] border-[#29dfff]">
      <input
        className="h-full w-[400px] flex-1 bg-transparent px-[20px] font-semibold caret-[#00e1ff] focus:outline-none"
        placeholder="Tìm kiếm"
      />
      <Image src={SearchIcon} alt="Search Icon" className="w-[50px] cursor-pointer px-[10px]" />
    </div>
  )
}
