import SearchIcon from '@/assets/svgs/search-icon.svg'
import Image from 'next/image'

export const Search = () => {
  return (
    <div className="flex h-[55px] w-[70%] overflow-hidden rounded-[15px] border-[2px] border-[#29dfff] md:w-[500px]">
      <input
        className="h-full w-[60%] flex-1 cursor-text bg-transparent px-[20px] font-semibold caret-[#00e1ff] focus:outline-none md:w-[400px]"
        placeholder="Tìm kiếm"
      />
      <Image src={SearchIcon} alt="Search Icon" className="w-[50px] cursor-pointer px-[10px]" />
    </div>
  )
}
