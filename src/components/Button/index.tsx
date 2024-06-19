import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    
    return (
      <button
        className='inline-flex items-center bg-purple-700 hover:bg-purple-600 h-10 px-6 py-2 text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
