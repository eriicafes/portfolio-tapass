type Props = React.ComponentPropsWithoutRef<"svg">;

export function Star(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        fill="#FFD200"
        d="M9.024.41l2.062 6.345h6.671l-5.397 3.92 2.062 6.345-5.398-3.92-5.397 3.92 2.062-6.344L.292 6.755h6.671L9.024.41z"
      ></path>
    </svg>
  )
}