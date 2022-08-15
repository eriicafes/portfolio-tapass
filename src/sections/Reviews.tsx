import Image from "next/image";
import { FullLeftArrow } from "../components/icons/FullLeftArrow";
import { FullRightArrow } from "../components/icons/FullRightArrow";
import { QuotesClose } from "../components/icons/QuotesClose";
import { QuotesOpen } from "../components/icons/QuotesOpen";
import { Star } from "../components/icons/Star";
import { splitReviewText } from "../utils/review";

const reviewText = "Since i got my business integrated with Tapass it has been a seamless and stress free journey down the road.I definitely recommend Tapass to my fellow small business holders, it definitely takes some weight off and increases productivity. funny how this works"

export function Reviews() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-40 py-20 md:pb-36 bg-white text-center">
      <h3 className="text-2xl font-bold mb-2">What our customers say</h3>
      <h4 className="font-light">Our customer send us a bunch of great feedback about our services</h4>
      <div className="flex justify-between items-center mt-12">
        {/* left arrow */}
        <FullLeftArrow className="-translate-y-20 flex-shrink-0" />

        {/* customer */}
        <div className="flex-auto flex flex-col items-center">
          <Image className="rounded-full" src="/images/customer-care-woman.png" width={96} height={96} />

          <h5 className="mt-6 font-bold">Nancy Nyongo</h5>
          <p className="font-light text-sm">Nairobi, Kenya</p>

          <div className="px-12 py-1 mt-4 flex space-x-1">
            {Array.from({ length: 5 }).map(() => (
              <Star />
            ))}
          </div>

          <p className="relative mt-12 md:max-w-lg lg:max-w-4xl font-light">
            <QuotesOpen className="absolute -top-10 -left-20 hidden md:block" />
            {splitReviewText(reviewText, [17, 12, 9]).lines.map((line) => (
              <>
                <span className="">{line}</span>{" "}
                <br className="hidden md:block" />
              </>
            ))}
            <QuotesClose className="absolute -bottom-8 -right-8 hidden md:block" />
          </p>
        </div>

        {/* right arrow */}
        <FullRightArrow className="-translate-y-20 flex-shrink-0" />
      </div>

    </div>
  )
}
