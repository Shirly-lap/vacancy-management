import React from 'react'

interface ICradDescriptionProps{
  children: React.ReactNode;
  className: string;
}
export const CardDescription = ({children, className}: ICradDescriptionProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
