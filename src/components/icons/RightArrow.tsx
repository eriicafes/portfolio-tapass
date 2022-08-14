type Props = React.ComponentPropsWithoutRef<"svg">;

export function RightArrow(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="14"
      fill="none"
      viewBox="0 0 24 21"
      {...props}
    >
      <path
        stroke="#FF9200"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.551"
        d="M1.428 10.548h20.404M12.905 1.621l8.927 8.927-8.927 8.927"
      ></path>
    </svg>
  )
}