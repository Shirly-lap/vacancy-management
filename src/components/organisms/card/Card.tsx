import React from 'react'
import styles from "./Card.module.scss"
import { CardHeader } from '@/components/molecules/CardHeader'
import { CardDescription } from '../../molecules/CardDescription';
// import { Text } from '@/components/atoms/Text';
import { CardFooter } from '@/components/molecules/CardFooter';
import { IconButton } from '@/components/molecules/IconButton';
import { icons } from '@/model/Icon';


interface ICardProps{
  title: string;
  children: React.ReactNode
  onEdit : () => void;
  onDelete : () => void;
}
export const Card = ({title, children, onEdit, onDelete}: ICardProps) => {
  return (
    <>
      <div className={styles.crad}>
        <CardHeader className={styles.headerCrad} text={title} />
        <CardDescription className={styles.descriptionCard}>
          {/*  */}
          {children}
        </CardDescription>

        <CardFooter className={styles.cardFooter}> 
          <IconButton Icon={icons.edit} className= {styles.btn} colorButton={styles.btnEdit} onClick={onEdit}/>
          <IconButton Icon={icons.delete} className={styles.btn} colorButton={styles.btnDelete} onClick={onDelete} />
        </CardFooter>
      </div>

    </>
  )
}
