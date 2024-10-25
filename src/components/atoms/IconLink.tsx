"use client"
import React from 'react'
import Link from 'next/link';
import { IconType } from 'react-icons';
// import { usePathname } from 'next/navigation';
import style from "../organisms/navbar/Navbar.module.scss"
import { usePathname } from 'next/navigation';

interface IconLink {
  path: string;
  text: string;
  Icon: IconType;
}
export const IconLink = ({ path, text, Icon }: IconLink) => {
  // const IconComponent = icons[iconType];
  const currentPath = usePathname();
  console.log(currentPath);
  
  const resolveClas =() =>{
    if(path === currentPath){
      if(currentPath.includes("vacantes")){
        return style.activePrimary
      }
      else{
        return style.activeSecundary
      }
    }
  }

  return (
    <Link href={path} className={`${style.linkIcon} ${resolveClas()}`} >
      <Icon size="20"  className={style.colorIcon}/>
      {text}
    </Link>
  )
}
