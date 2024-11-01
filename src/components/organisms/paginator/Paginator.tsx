import { IconButton } from '@/components/molecules/IconButton'
import React from 'react'
import { icons } from '../../../model/Icon';
import { Text } from '@/components/atoms/Text';
import style from "./Paginator.module.scss"


interface IPaginatorProps {
  currentPage: number,
  totalPages: number,
  onPrev: () => void,
  onNext: () => void,
}


export const Paginator = ({ currentPage, totalPages, onPrev, onNext }: IPaginatorProps) => {
  return (
    <>
      <div className={style.paginator}>
        <div className={style.containerPaginator}>
          <IconButton Icon={icons.arrowBack} className={style.btnPrev} onClick={onPrev} />
          <div className="pages">
            <Text label={`Pagina ${currentPage} de ${totalPages}`} />
          </div>
          <IconButton Icon={icons.arrowForward} className={style.btnNext} onClick={onNext} />
        </div>
      </div>
    </>
  )
}
