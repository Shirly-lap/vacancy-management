import React from 'react'


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}
export const Input = ({...rest}: InputProps) => {
  return (
    <input className="inputPrimary"{...rest}/>
  )
}
