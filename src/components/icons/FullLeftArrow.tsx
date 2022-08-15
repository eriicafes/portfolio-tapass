type Props = React.ComponentPropsWithoutRef<"svg">;

export function FullLeftArrow(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="23"
      fill="none"
      viewBox="0 0 24 21"
      {...props}
    >
      <path
        stroke="#FF9200"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.551"
        d="M22.32 10.548H1.914M10.842 1.621l-8.927 8.927 8.927 8.927"
      ></path>
    </svg>
  )
}