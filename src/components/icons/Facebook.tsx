type Props = React.ComponentPropsWithoutRef<"svg">;

export function Facebook(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 22 22"
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M.124 10.938c0 5.326 3.868 9.754 8.926 10.652v-7.737H6.372v-2.975H9.05v-2.38c0-2.679 1.726-4.166 4.167-4.166.773 0 1.606.119 2.38.237v2.738h-1.369c-1.31 0-1.607.655-1.607 1.488v2.083h2.857l-.476 2.975h-2.38v7.737c5.058-.898 8.926-5.325 8.926-10.652 0-5.925-4.82-10.772-10.712-10.772C4.944.166.124 5.013.124 10.938z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}