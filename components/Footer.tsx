import FacebookIcon from '@/assets/svgs/facebook-icon.svg'
import ZaloIcon from '@/assets/svgs/zalo-icon.svg'
import Image from 'next/image'
import Link from 'next/link'
import ArrowTopIcon from '@/assets/svgs/arrow-top-icon.svg'
export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="mb-[150px] flex w-full items-start justify-between border-t-[2px] border-[#e4e4e49a] bg-[#ffffffb0] pt-[30px] backdrop-blur-[2px]">
        <div>
          <div>
            <Link
              href="/cau-hoi-thuong-gap"
              className="flex cursor-pointer items-center gap-[10px] underline visited:text-[#a929ff] active:text-[#a929ff]"
            >
              <p className="text-[20px] font-bold">FAQ</p>
              <Image src={ArrowTopIcon} alt="" />
            </Link>
            <Link
              href="/"
              className="flex cursor-pointer items-center gap-[10px] underline visited:text-[#a929ff] active:text-[#a929ff]"
            >
              <p className="text-[20px] font-bold">About Us</p>
              <Image src={ArrowTopIcon} alt="" />
            </Link>
          </div>
          <div className="mt-[30px]">
            <span className="text-[18px] font-bold">{`©${currentYear} Webaccgiare`}</span>
          </div>
        </div>

        <div className="flex items-end gap-[30px]">
          <Link
            href={'https://www.facebook.com/webaccgiare.store/'}
            target="_blank"
            className="group cursor-pointer"
          >
            <button className="flex flex-col items-center">
              <Image
                src={FacebookIcon}
                alt="Facebook"
                title="Facebook"
                className="w-[35px] select-none duration-100 group-active:scale-125"
              />
              <span className="text-[15px] font-bold">Facebook</span>
            </button>
          </Link>

          <Link
            href={'https://zalo.me/0888388859'}
            target="_blank"
            className="group cursor-pointer"
          >
            <button className="flex flex-col items-center">
              <Image
                src={ZaloIcon}
                alt="Zalo"
                title="Zalo"
                className="w-[35px] select-none duration-100 group-active:scale-125"
              />
              <span className="text-[15px] font-bold">Zalo</span>
            </button>
          </Link>
        </div>
      </footer>
    </>
  )
}
