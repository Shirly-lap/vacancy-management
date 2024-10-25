import React from 'react'

interface IFooterCard{
  className: string;
  children: React.ReactNode;

}
export const CardFooter = ({className, children}: IFooterCard) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
