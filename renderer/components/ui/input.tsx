import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
}

const Input = ({ label, ...props }: InputProps) => {
	return (
		<div>
			<label
				htmlFor='input'
				className='block pl-2 mb-3 text-sm font-medium text-white'>
				{label}
			</label>
			<input
				id='input'
				className='bg-lightdark text-white text-xs rounded-lg block w-full p-3.5 border-none focus:outline-none'
				{...props}
			/>
		</div>
	)
}

export default Input
