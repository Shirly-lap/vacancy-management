import React from 'react'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  styleClass: string;
  label: string;
}
export const Button = ({styleClass, label, ...rest}:IButtonProps) => {

  return (
    <button className={styleClass} {...rest}>{label}</button>
  )
}
