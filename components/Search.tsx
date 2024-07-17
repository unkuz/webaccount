import React from "react";
import Image from "next/image";
import SearchIcon from "@/assets/svgs/search-icon.svg";

export const Search = () => {
  return (
    <div className="w-[500px] h-[55px] rounded-[15px] border-[2px] border-[#29dfff] overflow-hidden flex">
      <input
        className="w-[400px] h-full  flex-1 focus:outline-none px-[20px] caret-[#00e1ff] font-semibold"
        placeholder="Tìm kiếm"
      />
      <Image
        src={SearchIcon}
        alt="Search Icon"
        className="w-[50px] px-[10px] cursor-pointer"
      />
    </div>
  );
};
