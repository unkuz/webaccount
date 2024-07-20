'use client'
import { TIMER_HERO } from '@/app/config'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useRef } from 'react'

export const Hero = () => {
  const timer = useRef<NodeJS.Timeout>()
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      renderMode: 'performance',
      loop: true,
      slideChanged() {},
    },
    [],
  )

  useEffect(() => {
    timer.current = setInterval(() => {
      instanceRef.current?.next()
    }, TIMER_HERO)

    return () => {
      clearInterval(timer.current)
    }
  })

  return (
    <div
      ref={sliderRef}
      className="keen-slider relative aspect-[2.5/1] rounded-[20px] text-[1.5rem] shadow-xl *:flex *:items-center *:justify-center *:text-black sm:!aspect-[3.5/1] sm:text-[2rem] lg:text-[3.5rem]"
    >
      <div className="keen-slider__slide bg-[#93ec58] px-[20px] font-bold">
        <p className="text-center">Web bán Account Premium giá rẻ</p>
      </div>
      <div className="keen-slider__slide bg-[#58dbec] px-[20px] font-bold">
        <p className="text-center">Uy tín, chất lượng, bảo hành trọn thời gian sử dụng</p>
      </div>
      <div className="keen-slider__slide bg-[#9f69e7] px-[20px] font-bold">
        <p className="text-center">Ở đâu bán rẻ, chúng tôi còn bán rẻ hơn !</p>
      </div>
    </div>
  )
}
