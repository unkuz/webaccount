'use client'
import ArrowCircleIcon from '@/assets/svgs/arrow-circle-icon.svg'
import { listProduct } from '@/config/product.data'
import { sleep } from '@/utils/main'
import clsx from 'clsx'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
  const [type, setType] = useState(['tất cả', 'học tập', 'giải trí', 'phim ảnh'])

  const [selected, setSelected] = useState(type[0])

  const [loading, setLoading] = useState(false)

  const onSelect = async (name: string) => {
    setSelected(name)
    setLoading(true)
    await sleep(1)
    setLoading(false)
  }

  const isDisabledBtn = useCallback((i: string) => i === selected, [selected])

  const [currentHover, setCurrentHover] = useState('')

  useEffect(() => {
    console.log('sdfsdf')
  }, [currentHover])
  return (
    <div className="flex flex-col gap-[8px]">
      <h2 className="text-[22px] font-bold">Sản phẩm đang bán </h2>
      <div className="inline-flex w-full gap-[10px] overflow-x-scroll [scrollbar-width:none]">
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
            <span className="text-nowrap">{i}</span>
            <Image
              alt="Loading"
              src={ArrowCircleIcon}
              className={clsx('w-0 animate-spin opacity-0 duration-100', {
                invert: selected === i,
                'ml-[5px] !w-[20px] min-w-[20px] opacity-100': selected === i && loading,
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
