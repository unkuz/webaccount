'use client'
import { appConfig } from '@/config/app'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useRef } from 'react'

export const Hero = () => {
  const timer = useRef<NodeJS.Timeout>()
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      renderMode: 'precision',
      loop: true,
      slideChanged() {},
    },
    [],
  )

  useEffect(() => {
    timer.current = setInterval(() => {
      instanceRef.current?.next()
    }, appConfig.timerHero)

    return () => {
      clearInterval(timer.current)
    }
  })

  return (
    <div className="group relative cursor-pointer overflow-hidden">
      <div
        ref={sliderRef}
        className="keen-slider clip-path-saw relative aspect-[2.5/1] text-[1.5rem] shadow-xl *:flex *:items-center *:justify-center *:text-black sm:!aspect-[3.2/1] sm:text-[2rem] lg:text-[3.5rem]"
      >
        <div className="keen-slider__slide bg-[#93ec58] px-[20px] font-bold">
          <p className="text-center">Shop bán Account Premium</p>
        </div>
        <div className="keen-slider__slide bg-[#9f69e7] px-[20px] font-bold">
          <p className="text-center">Giá sao cũng bán</p>
        </div>
        <div className="keen-slider__slide bg-[#58dbec] px-[20px] font-bold">
          <p className="text-center">Uy tín, chất lượng, bảo hành trọn thời gian sử dụng</p>
        </div>
      </div>
      <div className="absolute left-[-15%] top-[-15%] h-[130%] w-[50px] rotate-[25deg] bg-[#ffffffd8] opacity-0 backdrop-blur-lg group-hover:animate-fare group-hover:opacity-100" />
    </div>
  )
}
