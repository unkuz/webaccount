import Link from 'next/link'
import { useEffect, useMemo, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

type Props = {
  product: string
  productFull: string
  duration: string
  sale: string
  preSale: string
  type: string
  svg: string
}

export const ProductCard = ({
  product,
  productFull,
  duration,
  sale,
  preSale,
  type,
  svg,
}: Props): JSX.Element => {
  const elRef = useRef<HTMLDivElement>(null)

  const description = useMemo(() => {
    return `${productFull} ${duration} - ${type}`
  }, [productFull, duration, type])

  useEffect(() => {
    VanillaTilt.init(elRef.current!, {
      scale: 1.0,
      glare: true,
      speed: 10_000,
      gyroscope: true,
    })
  }, [])
  return (
    <>
      <Link href={`/product/${Math.random()}`}>
        <div
          ref={elRef}
          className="w-full relative bg-[#c2fbff] rounded-[20px]
    before:content-[''] before:absolute before:top-[-3px] before:left-[-3px] before:right-[-3px]
    before:bottom-[-3px] before:border-[3px] before:border-[#61e7ff] before:animate-clippath
    before:rounded-[25px] after:content-[''] after:absolute after:top-[-3px] after:left-[-3px]
    after:right-[-3px] after:bottom-[-3px] after:border-[3px] after:border-[#61e7ff] after:animate-clippath-delay
    after:rounded-[25px] 
    before:opacity-0
    after:opacity-0
    hover:before:opacity-100
    hover:after:opacity-100
    duration-500
    shadow-md
    p-[10px]
    hover:z-[1]
    cursor-pointer
    "
        >
          <div className="w-full aspect-[2.3/1] bg-[#aeecff] backdrop-blur-lg rounded-[15px] relative p-[20px] flex justify-between">
            <div>
              <p className="font-bold text-[25px]">Gói gia hạn</p>
              <p className="font-extrabold text-[45px] text-[#3f3f3f]">{product}</p>
              <p className="font-bold text-[25px]">{duration}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: svg }} className="w-[150px]"></div>
          </div>
          <div className="mt-[5px]">
            <p className="font-bold">{description}</p>
            <p className="font-bold flex gap-[10px] items-center">
              <span className="text-[22px] text-[#000000] font-extrabold">{sale}.000đ</span>
              <span className="line-through text-[#858585] blur-sm">{preSale}.000đ</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}
