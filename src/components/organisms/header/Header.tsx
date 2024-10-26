import { Title } from '@/components/atoms/Title';
import React from 'react'
// import { IconType } from 'react-icons';
import style from "../header/Header.module.scss"
import { IconButton } from '@/components/molecules/IconButton';
import { IconType } from 'react-icons';

interface HeaderProps {
  title: string;
  name: string;
  // icon: IconType
  btnColor: string;
  icon: IconType;
  modal:() => void;
}

export const Header = ({title, name, icon, btnColor, modal}: HeaderProps) => {
  return (
    <div className={style.container}>
    <Title label={title}></Title>
    <IconButton Icon={icon} className={style.iconButton} text={name}  colorButton={btnColor} onClick={modal}/>
    {/* {icon} */}
</div>
  )
}
