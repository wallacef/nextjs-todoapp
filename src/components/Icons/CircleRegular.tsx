import * as React from "react"

export const CircleRegular = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 32 32"
    fill="none"
    id="circleRegularIcon"
    {...props}
  >
    <path
      fill="purple"
      d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3Zm0 24a11 11 0 1 1 11-11 11.012 11.012 0 0 1-11 11Z"
    />
  </svg>
)