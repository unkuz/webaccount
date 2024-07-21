import SearchIcon from '@/assets/svgs/search-icon.svg'
import clsx from 'clsx'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'

export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocusInput, setIsFocusInput] = useState(false)

  useClickAway(inputRef, () => {
    setIsFocusInput(false)
  })
  return (
    <div
      className={clsx(
        'relative flex h-[55px] w-[70%] overflow-hidden rounded-[15px] border-[2px] border-[#29dfff] duration-200 md:w-[500px]',
        {
          'border-[#a929ff] ring-1 ring-[#a929ff]': isFocusInput,
        },
      )}
    >
      <input
        ref={inputRef}
        className={clsx(
          'h-full w-[60%] flex-1 cursor-text bg-transparent px-[20px] font-semibold caret-[#00e1ff] focus:outline-none md:w-[400px]',
          {
            'caret-[#a929ff]': isFocusInput,
          },
        )}
        placeholder="Tìm kiếm"
        onClick={() => setIsFocusInput(true)}
      />
      <Image
        src={SearchIcon}
        alt="Search Icon"
        className="w-[50px] cursor-pointer select-none px-[10px]"
      />
      <div
        className={clsx('absolute inset-0 z-[-10] w-0 bg-[#c4a0f34f] duration-200', {
          'w-full': isFocusInput,
        })}
      ></div>
    </div>
  )
}
