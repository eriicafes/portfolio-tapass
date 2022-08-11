import Image from "next/image";
import { CheveronRight } from "../components/icons/ChevronRight";
import { Header } from "../containers/Header";

export function Hero() {
  return (
    <div className="bg-gradient-to-tr from-product-rose via-product-coral to-product-beige text-black">
      <Header />
      <div className="h-full flex flex-col md:flex-row">
        <div className="md:w-3/5 flex flex-col justify-center pt-10 md:pt-0 px-4 md:px-0">
          <div className="md:pl-10 lg:pl-28 flex flex-col items-center md:block space-y-8">
            <h2 className="text-product-darkBlue text-3xl md:text-4xl lg:text-5xl font-extrabold text-center md:text-left">Providing Supporting to SME’S</h2>
            <h3 className="w-[80%] text-base lg:text-lg font-light leading-relaxed text-center md:text-left">The catalyst to technological advancement by offering financial digital solutions to startups through our efficient and convenient platform.</h3>
            <button className="flex items-center space-x-8 bg-product-orange text-white px-8 py-4 rounded-full">
              <span className="text-sm font-bold">Get Started</span>
              <CheveronRight className="w-3 h-5" />
            </button>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center md:justify-end pt-16 md:pt-10">
          <Image src="/images/hero-woman.png" width={512} height={476} />
        </div>
      </div>
    </div>
  )
}