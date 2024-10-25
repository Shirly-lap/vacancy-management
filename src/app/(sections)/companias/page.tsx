import { Header } from '@/components/organisms/header/Header'
import { icons } from '@/model/Icon'
import React from 'react'

export default function page() {
  return (
    <>
    <Header title='Compañias ' name='Agregar compañia' color='#fff' icon={icons.add}/>
  </>
  )
}
