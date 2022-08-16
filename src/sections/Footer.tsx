import Image from "next/image";
import { Facebook } from "../components/icons/Facebook";
import { Instagram } from "../components/icons/Instagram";
import { LinkedIn } from "../components/icons/LinkedIn";
import { Location } from "../components/icons/Location";
import { Mail } from "../components/icons/Mail";
import { Phone } from "../components/icons/Phone";
import { TapassWhite } from "../components/icons/TapassWhite";
import { Twitter } from "../components/icons/Twitter";

export function Footer() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-40 py-20 bg-product-darkBlue text-white grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {/* logo area */}
      <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-12 lg:mb-0">
        <TapassWhite />
      </div>

      {/* links area */}
      <div className="pt-2 flex flex-col space-y-6 text-sm uppercase">
        <a href="#">About Us</a>
        <a href="#">Testimonials</a>
        <a href="#">Our Impact</a>
        <a href="#">Blog</a>
      </div>

      {/* contact area */}
      <div className="pt-2 flex flex-col space-y-5">
        <a href="#" className="text-sm uppercase">Contact Us</a>
        <a href="#" className="flex items-center space-x-3">
          <Mail className="w-4 h-4" />
          <span className="text-sm">Contact@tapass.com</span></a>
        <a href="#" className="flex items-center space-x-3">
          <Phone className="w-4 h-4" />
          <span className="text-sm">+234 809 648 4321</span></a>
        <a href="#" className="flex items-center space-x-3 max-w-[240px]">
          <Location className="w-4 h-4" />
          <span className="text-sm">14 Hughes Avenue, Alagomeji, Yaba, Lagos</span>
        </a>
        {/* social media icons */}
        <div className="flex items-center space-x-3 pt-4">
          <Twitter />
          <LinkedIn />
          <Facebook />
          <Instagram />
        </div>
      </div>

      {/* mobile area */}
      <div className="pt-2 flex flex-col mx-auto sm:mx-0 space-y-5 pl-4 mt-20 sm:mt-0 col-span-2 sm:col-span-1">
        <div className="w-full">
          <Image src="/images/google-play.svg" alt="google play" width={160} height={48} />
        </div>
        <div className="w-full">
          <Image src="/images/appstore.svg" alt="applestore" width={160} height={52} />
        </div>
      </div>
    </div>
  )
}
