import * as React from "react"

export const CheckCircleFill = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 32 32"
    fill="none"
    id="checkCircleFillIcon"
    {...props}
  >
    <path
      fill="green"
      d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3Zm5.707 10.707-7 7a1.001 1.001 0 0 1-1.415 0l-3-3a1 1 0 0 1 1.415-1.415L14 18.587l6.293-6.293a1 1 0 0 1 1.415 1.415Z"
    />
  </svg>
)