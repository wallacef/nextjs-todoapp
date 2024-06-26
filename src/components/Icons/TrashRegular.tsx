import * as React from "react"

export const TrashRegular = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      fill="gray"
      d="M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2ZM12 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8V5Zm12 21H8V8h16v18ZM14 13v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0Zm6 0v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0Z"
    />
  </svg>
)