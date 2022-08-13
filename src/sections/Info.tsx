import Image from "next/image"

export function Info() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-40 py-4 flex flex-col md:flex-row bg-product-beige">
      <div className="md:w-1/2 pt-32 pb-3 flex items-center justify-center">
        {/* cards */}
        <div className="flex space-x-6">
          <div className="flex flex-col space-y-6">
            <CardImage src="/images/rectangle-24.png" alt="rectangle 24" />
            <CardImage src="/images/rectangle-31.png" alt="rectangle 31" />
          </div>
          <div className="flex flex-col space-y-6 -translate-y-20">
            <CardImage src="/images/rectangle-29.png" alt="rectangle 29" />
            <CardImage src="/images/rectangle-30.png" alt="rectangle 30" />
          </div>
        </div>
        {/* cards end */}
      </div>
      <div className="md:w-1/2 pt-16 md:pt-36 pb-12">
        <div className="space-y-8 max-w-lg md:max-w-sm md:pl-6 text-center md:text-left text-xl font-light mx-auto">
          <p>In Africa today, SMEs contribute more than <PopSpan>50%</PopSpan> of most African GDP and an average of <PopSpan>60%</PopSpan> of employment</p>
          <p>And are the driving force of the continent’s economic development, yet facing several financial barriers</p>
        </div>
      </div>
    </div>
  )
}

type CardImageProps = {
  src: string,
  alt: string
}

const CardImage = ({ src, alt }: CardImageProps) => (
  <div className="w-32 h-40 rounded-xl overflow-hidden">
    <Image width={128} height={160} src={src} alt={alt} />
  </div>
)

type PopSpanProps = {
  children: React.ReactNode
}

const PopSpan = ({ children }: PopSpanProps) => (
  <span className="text-product-lightOrange font-black text-3xl px-2 align-middle">{children}</span>
)
