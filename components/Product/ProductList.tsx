"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const [type, setType] = useState([
    "tất cả",
    "học tập",
    "giải trí",
    "phim ảnh",
  ]);

  const [selected, setSelected] = useState(type[0]);

  const onSelect = (name : string ) => {
    setSelected(name);
  };
  return (
    <div className="flex flex-col gap-[8px]">
      <h2 className="text-[18px] font-semibold">Sản phẩm đang bán </h2>
      <div className="flex gap-[10px] flex-wrap">
        {type.map((i, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(i)}
            className={clsx(
              "px-[13px] h-[38px] bg-[#fff0] rounded-[38px] font-bold capitalize ",
       
              selected !== i ? 'ring-1 ring-inset ring-gray-300':" bg-[black] text-white"
            )}
          >
            {i}
          </button>
        ))}
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-2 gap-[10px] mt-[5px]">
        {[1,2,3,4,5,6,7,8,9].map((i)=>(

        <ProductCard key={i}/>
        ))}
     

      </div>
    </div>
  );
};
