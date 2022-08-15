import { FeatureCard } from "../components/features/FeatureCard";
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
