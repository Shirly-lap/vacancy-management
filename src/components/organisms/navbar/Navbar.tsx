import { icons } from '@/model/Icon';
import { IconLink } from '@/components/atoms/IconLink';
import React from 'react'

const navBarItems = [
  { path: "/vacantes", title: "Vacantes", iconType:icons.vacant },
  { path: "/companias", title: "Compañias", iconType:icons.company }
];

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navLinks">
          {navBarItems.map((item, key)=>(
            <IconLink key={key} path={item.path} text={item.title} Icon={item.iconType} ></IconLink>
          ))}
        </div>

        <div className="search">
        </div>
      </nav>
    </>
  )
}
