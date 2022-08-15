import Image from "next/image"

type Props = {
  src: string,
  alt: string
}

export const InfoImage = ({ src, alt }: Props) => (
  <div className="w-32 h-40 rounded-xl overflow-hidden">
    <Image width={128} height={160} src={src} alt={alt} />
  </div>
)