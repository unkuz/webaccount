'use client'
import ArrowCircleIcon from '@/assets/svgs/arrow-circle-icon.svg'
import { listProduct } from '@/config/product.data'
import clsx from 'clsx'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
  const [type, setType] = useState(['tất cả', 'học tập', 'giải trí', 'phim ảnh'])

  const [selected, setSelected] = useState(type[0])

  const [loading, setLoading] = useState(false)

  const timerLoading = useRef<NodeJS.Timeout>()

  const onSelect = (name: string) => {
    clearTimeout(timerLoading.current)
    setLoading(true)

    timerLoading.current = setTimeout(() => {
      setLoading(false)
    }, 1_000)
    setSelected(name)
  }

  const isDisabledBtn = (i: string) => i === selected

  const [currentHover, setCurrentHover] = useState('')
  return (
    <div className="flex flex-col gap-[8px]">
      <h2 className="text-[22px] font-bold">Sản phẩm đang bán </h2>
      <div className="flex flex-wrap gap-[10px]">
        {type.map((i, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(i)}
            disabled={isDisabledBtn(i)}
            className={clsx(
              'flex h-[38px] cursor-pointer items-center rounded-[38px] bg-[#fff0] px-[13px] font-bold capitalize',

              selected !== i ? 'ring-1 ring-inset ring-gray-300' : 'bg-[black] text-white',
            )}
          >
            <span>{i}</span>
            <Image
              alt="Loading"
              src={ArrowCircleIcon}
              className={clsx('w-0 animate-spin opacity-0 duration-100', {
                invert: selected === i,
                'ml-[5px] !w-[20px] opacity-100': selected === i && loading,
              })}
            />
          </button>
        ))}
      </div>
      <div className="mt-[15px] grid grid-cols-2 gap-[10px] sm:gap-[25px] xl:grid-cols-3">
        {listProduct.map((i, idx) => (
          <ProductCard
            key={idx}
            {...i}
            setCurrentHover={setCurrentHover}
            currentHover={currentHover}
          />
        ))}
      </div>
    </div>
  )
}
