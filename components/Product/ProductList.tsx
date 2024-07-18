'use client'
import React, { useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { ProductCard } from './ProductCard'
import ArrowCircleIcon from '@/assets/svgs/arrow-circle-icon.svg'
import Image from 'next/image'

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
  return (
    <div className="flex flex-col gap-[8px]">
      <h2 className="text-[18px] font-semibold">Sản phẩm đang bán </h2>
      <div className="flex gap-[10px] flex-wrap">
        {type.map((i, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(i)}
            disabled={isDisabledBtn(i)}
            className={clsx(
              'px-[13px] h-[38px] bg-[#fff0] rounded-[38px] font-bold capitalize flex items-center gap-[5px] duration-200',

              selected !== i ? 'ring-1 ring-inset ring-gray-300' : ' bg-[black] text-white',
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
      <div className="grid xl:grid-cols-3 grid-cols-2 gap-x-[15px] gap-y-[20px] mt-[5px]">
        {[1, 2].map((i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  )
}
