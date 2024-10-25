import { Title } from '@/components/atoms/Title';
import React from 'react'
import { IconType } from 'react-icons';
import style from "../organisms/navbar/Navbar.module.scss"
import { Button } from '@/components/atoms/Button';

interface HeaderProps {
  titl: string;
  name: string;
  icon: IconType
  color: string;
}

export const Header = (title, name, icon, color) => {
  return (
    <div className={style.container}>
    <Title label={title}></Title>
    <Button label={name} styleClass={icon}/>
    {color}
</div>
  )
}
