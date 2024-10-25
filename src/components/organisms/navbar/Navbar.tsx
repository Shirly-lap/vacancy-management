"use client"
import { icons } from '@/model/Icon';  // Asegúrate de que los íconos estén bien importados
import { IconLink } from '@/components/atoms/IconLink';
import React from 'react';
import { IconInput } from '@/components/molecules/IconInput';
import styles from "./Navbar.module.scss";
// import colors from "../../../assets/styles/variables.scss"

const navBarItems = [
  { path: "/vacantes", title: "Vacantes", iconType: icons.vacant},  // Los íconos se pasan como componentes JSX
  { path: "/companias", title: "Compañias", iconType: icons.company }
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        {navBarItems.map((item, key) => (
          <IconLink
            key={key}
            path={item.path}
            text={item.title}
            Icon={item.iconType} 
          />
        ))}
      </div>
      <IconInput Icon={icons.search}  />  
    </nav>
  );
}
