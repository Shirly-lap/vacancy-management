
import { Header } from '@/components/organisms/header/Header'
import { icons } from '@/model/Icon'
import React from 'react'

export default function page() {
  return (
    <>
      <Header title='Vacantes' name='Agregar vancantes' color='blue' icon={icons.add} />
    </>
  )
}
