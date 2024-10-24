import { Title } from '@/components/atoms/Title'
import React from 'react'
import styles from "./global.module.scss";
import { Navbar } from '@/components/organisms/navbar/Navbar';

interface Iprops {
  children: React.ReactNode
}
export default function layout({ children }: Iprops) {
  return (
    <>
      <div className={styles.layoutContainer}>
        <Title label='Panel de Administración' className={styles.title}/>
        <Navbar/>
        <main>{children}</main>
      </div>

    </>

  )
}
