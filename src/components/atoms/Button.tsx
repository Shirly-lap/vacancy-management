import React from 'react'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleClass: string;
  label?: string;
  children?: React.ReactNode
}
export const Button = ({ styleClass, label, children, ...rest }: IButtonProps) => {

  return (
    <button className={styleClass} {...rest}>
      {children}
      {label}
    </button>
  )
}
