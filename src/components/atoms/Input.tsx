import React from 'react'


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  styleClass: string;
}
export const Input = ({styleClass, ...rest}: InputProps) => {
  return (
    <input className={`inputPrimary ${styleClass}`}{...rest}/>
  )
}
