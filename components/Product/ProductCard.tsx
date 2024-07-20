import clsx from 'clsx'
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
  setCurrentHover: (i: string) => void
  currentHover: string
}

export const ProductCard = ({
  product,
  productFull,
  duration,
  sale,
  preSale,
  type,
  svg,
  setCurrentHover,
  currentHover,
}: Props): JSX.Element => {
  const elRef = useRef<HTMLDivElement>(null)

  const description = useMemo(() => {
    return `${productFull} ${duration} - ${type}`
  }, [productFull, duration, type])

  useEffect(() => {
    VanillaTilt.init(elRef.current!, {
      scale: 1.1,
      speed: 2_000,
    })
  }, [])
  return (
    <>
      <Link href={`/product/${Math.random()}`}>
        <div
          ref={elRef}
          onMouseOver={() => setCurrentHover(product)}
          onMouseLeave={() => setCurrentHover('')}
          className={clsx(
            `group relative w-full cursor-pointer rounded-[20px] bg-[#a9f9ff] p-[10px] shadow-md duration-500 before:absolute before:bottom-[-3px] before:left-[-3px] before:right-[-3px] before:top-[-3px] before:animate-clippath before:rounded-[25px] before:border-[3px] before:border-[#61e7ff] before:opacity-0 before:content-[''] after:absolute after:bottom-[-3px] after:left-[-3px] after:right-[-3px] after:top-[-3px] after:animate-clippath-delay after:rounded-[25px] after:border-[3px] after:border-[#61e7ff] after:opacity-0 after:content-[''] hover:z-[1] hover:before:opacity-100 hover:after:opacity-100`,
            {
              'opacity-30': currentHover !== product,
              '!opacity-100 !blur-none': currentHover === '',
            },
          )}
        >
          <div className="clip-path-saw relative flex aspect-[2.3/1] w-full justify-between overflow-hidden rounded-[15px] bg-[#86e2fc] p-[20px] backdrop-blur-lg">
            <div>
              <p className="text-[20px] font-bold text-[#3a3a3a]">Gói gia hạn</p>
              <p className="z-10 text-[35px] font-extrabold text-[#3a3a3a]">{product}</p>
              <p className="text-[20px] font-bold text-[#3a3a3a]">{duration}</p>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: svg }}
              className="absolute right-[20px] top-1/2 w-[30%] -translate-y-1/2"
            />
            <div className="absolute left-[-15%] top-[-15%] h-[130%] w-[20px] rotate-[25deg] bg-[#ffffffd8] opacity-0 backdrop-blur-lg group-hover:animate-fare group-hover:opacity-100" />
          </div>

          <div className="mt-[5px]">
            <p className="font-bold text-[#3a3a3a]">{description}</p>
            <p className="flex items-center gap-[10px] font-bold">
              <span className="text-[22px] font-extrabold text-[#0b293d]">{sale}.000đ</span>
              <span className="text-[#858585] line-through blur-sm">{preSale}.000đ</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}
