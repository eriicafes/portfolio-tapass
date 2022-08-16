type Props = React.ComponentPropsWithoutRef<"svg">;

export function Location(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="15"
      fill="none"
      viewBox="0 0 10 15"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.224"
        d="M5.142 7.224a1.836 1.836 0 100-3.673 1.836 1.836 0 000 3.673z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.224"
        d="M8.815 7.224c-1.378 3.213-3.673 6.886-3.673 6.886s-2.296-3.673-3.673-6.886C.092 4.01 2.387 1.255 5.142 1.255c2.754 0 5.05 2.755 3.673 5.969z"
      ></path>
    </svg>
  )
}