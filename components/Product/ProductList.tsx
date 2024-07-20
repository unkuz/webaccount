'use client'
import React, { useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { ProductCard } from './ProductCard'
import ArrowCircleIcon from '@/assets/svgs/arrow-circle-icon.svg'
import Image from 'next/image'
import { listProduct } from '@/config/product.data'

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

  console.log('currentHover', currentHover)
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
              'flex h-[38px] items-center gap-[5px] rounded-[38px] bg-[#fff0] px-[13px] font-bold capitalize duration-200',

              selected !== i ? 'ring-1 ring-inset ring-gray-300' : 'bg-[black] text-white',
            )}
          >
            <span>{i}</span>
            {selected === i && loading && (
              <Image
                alt="Loading"
                src={ArrowCircleIcon}
                className={clsx('w-[20px] animate-spin', {
                  invert: selected === i,
                })}
              />
            )}
          </button>
        ))}
      </div>
      <div className="mt-[10px] grid grid-cols-2 gap-[10px] sm:gap-[25px] xl:grid-cols-3">
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
