import React from 'react'

export interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode,
}
export const Form = ({ children, ...rest }: IFormProps) => {
  return (
    <form className='formPrimary' {...rest}>
      {children}
    </form>
  )
}
