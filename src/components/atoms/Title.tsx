import React from 'react'

interface ITitleProps{
  label: string;
}
export const Title = ({label}:ITitleProps) => {
  return (
    <h1 className='title'>{label}</h1>
  )
}
