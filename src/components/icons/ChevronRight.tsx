type Props = React.ComponentPropsWithoutRef<"svg">;

export function CheveronRight(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      fill="none"
      viewBox="0 0 8 14"
      {...props}
    >
      <path
        fill="#fff"
        d="M1.41.802c.235 0 .423.07.563.21l5.73 5.694a.895.895 0 01.245.598c0 .21-.082.398-.246.562L1.973 13.56a.774.774 0 01-.562.246.774.774 0 01-.562-.246.774.774 0 01-.246-.563c0-.21.082-.398.246-.562l5.13-5.131L.85 2.172a.813.813 0 01-.246-.597c0-.235.076-.422.228-.563a.822.822 0 01.58-.21z"
      ></path>
    </svg>
  )
}