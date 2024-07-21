'use client'
import Image from 'next/image'
import React from 'react'
import CloseIcon from '@/assets/svgs/close-icon.svg'
import { usePopUp } from '@/store/popup'

export const PopUp = () => {
  const isShow = usePopUp((state) => state.isShow)
  return (
    <>
      {isShow && (
        <div className="fixed inset-0 z-50 bg-[#ffffff33] backdrop-blur-[2px]">
          <div className="fixed right-1/2 top-[100px] min-h-[700px] w-[50%] translate-x-1/2 border-[3px] border-[#000] bg-[#fff]">
            <div className="flex h-[80px] w-full items-center justify-end border-b-[3px] border-[#000] px-[20px]">
              <Image src={CloseIcon} alt="Close" className="w-[50px] cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
