import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'
import _ from 'lodash'
import { appConfig } from '@/config/app'
import CartIcon from '@/assets/svgs/cart-icon.svg'
import Image from 'next/image'

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

  const [colors, setColors] = useState(appConfig.colorPalletProductCard[0])

  const description = useMemo(() => {
    return `${productFull} ${duration} - ${type}`
  }, [productFull, duration, type])

  useEffect(() => {
    VanillaTilt.init(elRef.current!, {
      scale: 1.1,
      speed: 2_000,
    })
  }, [])

  useLayoutEffect(() => {
    setColors(_.sample(appConfig.colorPalletProductCard)!)
  }, [])

  useEffect(() => {
    console.log('first')
  }, [currentHover])

  return (
    <>
      <div
        ref={elRef}
        onMouseOver={() => setCurrentHover(product)}
        onMouseLeave={() => setCurrentHover('')}
        className={clsx(
          `group relative w-full rounded-[20px] p-[10px] shadow-md duration-200 before:absolute before:bottom-[-3px] before:left-[-3px] before:right-[-3px] before:top-[-3px] before:animate-clippath before:rounded-[25px] before:border-[3px] before:opacity-0 before:content-[''] after:absolute after:bottom-[-3px] after:left-[-3px] after:right-[-3px] after:top-[-3px] after:animate-clippath-delay after:rounded-[25px] after:border-[3px] after:opacity-0 after:content-[''] hover:z-[1] hover:before:opacity-100 hover:after:opacity-100`,
          {
            'opacity-60': currentHover !== product,
            '!opacity-100 !blur-none': currentHover === '',
          },
          `bg-[${colors?.bgWraper}] before:border-[${colors?.insetBorder}] after:border-[${colors?.insetBorder}]`,
        )}
      >
        <div
          className={clsx(
            'clip-path-saw relative flex aspect-[2.3/1] w-full items-center justify-between overflow-hidden rounded-[15px] p-[20px] backdrop-blur-lg duration-200',
            `bg-[${colors?.bgInner}]`,
          )}
        >
          <div>
            <p className="text-[20px] font-bold text-[#3a3a3ade]">Gói gia hạn</p>
            <p className="z-10 text-[35px] font-extrabold text-[#3a3a3a]">{product}</p>
            <p className="text-[20px] font-bold text-[#3a3a3a]">{duration}</p>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: svg }}
            className="absolute right-[20px] top-1/2 w-[28%] -translate-y-1/2"
          />
          <div className="absolute left-[-15%] top-[-15%] h-[130%] w-[20px] rotate-[25deg] bg-[#ffffffd8] opacity-0 backdrop-blur-lg group-hover:animate-fare group-hover:opacity-100" />
        </div>

        <div className="mt-[5px]">
          <p className="font-bold text-[#3a3a3a]">{description}</p>
          <div className="flex justify-between">
            <p className="flex items-center gap-[10px] font-bold">
              <span className="text-[21px] font-extrabold text-[#000000]">{sale}.000đ</span>
              <span className="text-[#7e7e7e] line-through">{preSale}.000đ</span>
            </p>
            <button
              className="flex h-[35px] items-center justify-center rounded-[35px] bg-[#000000] px-[10px]"
              title="Thêm vào giỏ hàng"
            >
              <Image alt="Giỏ hàng" src={CartIcon} className="cursor-pointer invert" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
