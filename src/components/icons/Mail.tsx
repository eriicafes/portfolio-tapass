type Props = React.ComponentPropsWithoutRef<"svg">;

export function Mail(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="10"
      fill="none"
      viewBox="0 0 14 10"
      {...props}
    >
      <path
        fill="#fff"
        d="M12.92.309H1.902a.918.918 0 00-.918.918v7.346a.918.918 0 00.918.918H12.92a.918.918 0 00.918-.918V1.227a.918.918 0 00-.918-.918zm-1.01.918L7.411 4.34l-4.5-3.113h9zM1.902 8.573V1.645l5.247 3.631a.46.46 0 00.524 0l5.247-3.631v6.928H1.902z"
      ></path>
    </svg>
  )
}