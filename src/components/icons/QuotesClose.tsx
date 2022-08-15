type Props = React.ComponentPropsWithoutRef<"svg">;

export function QuotesClose(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="51"
      fill="none"
      viewBox="0 0 62 51"
      {...props}
    >
      <path
        fill="#EEEFEF"
        fillOpacity="0.8"
        d="M35.528 50.962c10.847-.762 26.44-2.494 26.448-23.737V.496H37.77v28.598h8.037c.51 7.636-5.779 9.607-12.616 11.12l2.336 10.748zm-32.429 0c10.847-.762 26.44-2.494 26.448-23.737V.496H5.342v28.598h8.037C13.89 36.73 7.6 38.7.763 40.214l2.336 10.748z"
      ></path>
    </svg>
  )
}