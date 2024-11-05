import { Title } from '@/components/atoms/Title'
import style from "./Modal.module.scss"
import React from 'react'
import { IconButton } from '@/components/molecules/IconButton'
import { icons } from '@/model/Icon'
// import { IconType } from 'react-icons'

interface IProps {
  className: string,
  children: React.ReactNode
  title: string,
  onClose: () => void,
  state : boolean
}
export default function Modal({ className, children, title, onClose, state}: IProps) {
  if (!state) return null

  return (
    <>
      <div className={style.modal}>
        <div className={`${style.modalContainer} ${className}`}>
          <div className={style.modalTitle}>
            <Title label={title} />
              <IconButton Icon={icons.close} onClick={onClose} className={style.btnIconSecondary} />
          </div>
          <div className={style.modalInputs}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
