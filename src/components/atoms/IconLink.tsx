import React from 'react'
import Link from 'next/link';
import { IconType } from 'react-icons';
// import { usePathname } from 'next/navigation';
import style from "../organisms/navbar/Navbar.module.scss"

interface IconLink {
  path: string;
  text: string;
  Icon: IconType;
  color?: string;

}
export const IconLink = ({ path, text, Icon, color = '#fff' }: IconLink) => {
  // const IconComponent = icons[iconType];
  // const currentPath = usePathname();

  return (
    <Link href={path} className={style.linkIcon} >
      <Icon size="20" color={color}/>
      {text}
    </Link>
  )
}
