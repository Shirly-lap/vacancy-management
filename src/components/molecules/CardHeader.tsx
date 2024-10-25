import React from 'react'
import { Title } from '../atoms/Title';

interface ICardHeaderProps {
  className: string;
  text: string

}
export const CardHeader = ({ className, text }: ICardHeaderProps) => {
  return (
    <>
      <div className={className}>
        <Title label={text} />
      </div>
    </>
  )
}
