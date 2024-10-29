import React from 'react'
import { IconType } from 'react-icons'
import { Button } from '../atoms/Button'

interface IconButton{
  Icon: IconType,
  className: string,
  text?: string
  colorButton?: string,
  onClick?: () => void;
}
export const IconButton = ({Icon, className, text, colorButton, onClick}: IconButton) => {
  return (
    <Button styleClass={`${className} ${colorButton}`} label={text} onClick={onClick}>
      <Icon size="20"></Icon>
    </Button>
  )
}
