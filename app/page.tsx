import { Hero } from "@/components/Hero";
import { ProductList } from "@/components/Product/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <div className="h-[15px]"></div>
      <ProductList/>
    </div>
  );
}
