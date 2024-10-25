import React from 'react'
import { Input } from '../atoms/Input'
import { IconType } from 'react-icons'
import style from "../organisms/navbar/Navbar.module.scss"


interface IconInputProps {
  Icon :IconType;
  colorIcon?: string;
  className?: string
}
export const IconInput = ({Icon, colorIcon}: IconInputProps) => {
  return (
    <>
    <div className={style.containerIconInput}>
      <Icon color={colorIcon}/>
      <Input type='text' styleClass={style.input} placeholder='Buscar..'/>
    </div>
    </>
  )
}
