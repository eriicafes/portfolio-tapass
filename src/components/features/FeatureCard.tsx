import Image from "next/image"

type Props = {
  title: string,
  illustration: string
}

export const FeatureCard = ({ title, illustration }: Props) => {
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