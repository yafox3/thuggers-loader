import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	className?: string
}

const Button = ({children, className, ...props}: ButtonProps) => {
  return (
	<button className={'px-6 py-1 text-base rounded-2xl border-[1px] border-solid border-lightdark bg-dark hover:bg-yellow transition-colors'.concat(' ', className)} {...props}>
	  {children}
	</button>
  )
}

export default Button
