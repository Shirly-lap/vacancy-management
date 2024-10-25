import React from 'react'
import { IconType } from 'react-icons'
import { Button } from '../atoms/Button'

interface IconButton{
  Icon: IconType,
  className: string,
  color? : string
  text: string
  colorButton: string,
}
export const IconButton = ({Icon, className, color = "blue", text, colorButton}: IconButton) => {
  return (
    <Button styleClass={`${className} ${colorButton}`} label={text}>
      <Icon size="20" color={color}></Icon>
    </Button>
  )
}
