import FacebookIcon from '@/assets/svgs/facebook-icon.svg'
import ZaloIcon from '@/assets/svgs/zalo-icon.svg'
import Image from 'next/image'
import Link from 'next/link'
export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="mb-[100px] flex h-[100px] w-full items-center justify-between border-t-[2px] border-[#e4e4e49a] bg-[#ffffffb0] backdrop-blur-[2px]">
        <span className="text-[18px] font-bold">{`©${currentYear} webaccgiare.store`}</span>
        <div className="flex items-end gap-[30px]">
          <Link
            href={'https://www.facebook.com/webaccgiare.store/'}
            target="_blank"
            className="cursor-pointer"
          >
            <button className="flex flex-col items-center">
              <Image src={FacebookIcon} alt="Facebook" title="Facebook" className="w-[35px]" />
              <span className="text-[12px] font-bold">Facebook</span>
            </button>
          </Link>

          <Link href={'https://zalo.me/0888388859'} target="_blank" className="cursor-pointer">
            <button className="flex flex-col items-center">
              <Image src={ZaloIcon} alt="Zalo" title="Zalo" className="w-[35px]" />
              <span className="text-[12px] font-bold">Zalo</span>
            </button>
          </Link>
        </div>
      </footer>
    </>
  )
}
