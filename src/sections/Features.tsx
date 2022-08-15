import Image from "next/image";
import { RightArrow } from "../components/icons/RightArrow";

export function Features() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-40 py-20 md:pb-28 bg-product-extraLightBlue">
      <div className="md:w-[672px] grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3s md:mx-auto">
        <div className="md:w-[320px] my-auto text-center md:text-left flex flex-col items-center md:block">
          <p className="text-xl font-light">
            <span className="text-product-orange font-bold">Tapass</span> is a fast rising financial solution platform aiming to assist SME’S and entreneur by providing solutions to these problems
          </p>
          <p className="pt-3"><RightArrow /></p>
        </div>
        <FeatureCard title="Loan Aquisition" illustration="/images/illustration-1.svg" />
        <FeatureCard title="License Acqusition &amp; Renewal" illustration="/images/illustration-2.svg" />
        <FeatureCard title="Tax Compliance" illustration="/images/illustration-3.svg" />
      </div>
      <div className="md:w-[672px] md:mx-auto mt-12 flex justify-center md:justify-end">
        <p className="text-sm md:text-xs text-product-orange">Read more</p>
      </div>
    </div>
  )
}

type FeatureCardProps = {
  title: string,
  illustration: string
}

const FeatureCard = ({ title, illustration }: FeatureCardProps) => {
  const [firstWord, ...rest] = title.split(" ")
  const restWords = rest.join(" ")

  return (
    <div className="md:w-[320px] bg-white drop-shadow-lg rounded-2xl p-5 pb-1 transition-transform duration-300 md:hover:scale-[102%]">
      <div className="flex gap-3">
        <div className="bg-product-lightOrange w-[3px] rounded-t rounded-b"></div>
        <p className="text-xl font-bold text-zinc-600">{firstWord} <br /> {restWords}</p>
      </div>
      <div className="flex justify-end">
        <Image src={illustration} width={180} height={120} />
      </div>
    </div>
  )
}
