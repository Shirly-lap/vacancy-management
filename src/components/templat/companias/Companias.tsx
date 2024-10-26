"use client";
import { Header } from '@/components/organisms/header/Header';
import { icons } from '@/model/Icon';
import style from "../../../components/organisms/header/Header.module.scss";
import styleCrad from "../../../components/organisms/card/Card.module.scss"

import React from 'react'
import { Card } from '@/components/organisms/card/Card'
import { Text } from '@/components/atoms/Text'

export default function Companias() {
  const handleEdit = () => {
    console.log("actualizar");
  };

  const handleDelete = () => {
    console.log("eliminar");
  };

  const add =() =>{
    alert("agregar una compania")
  }
  return (
    <>
      <Header title='Compañias ' name='Agregar compañia' btnColor={style.colorBtnSecondary} icon={icons.add} modal={add} />
      <div className={styleCrad.cardsList}>
        <Card title='TechCorp' onEdit={handleEdit} onDelete={handleDelete}>
          <Text label='Ciudad de México' />
          <Text label='Contacto: 555-0101' />
        </Card>
        <Card title='TechCor3' onEdit={handleEdit} onDelete={handleDelete}>
          <Text label='Ciudad de México' />
          <Text label='Contacto: 555-0101' />
        </Card>
        <Card title='TechCor3' onEdit={handleEdit} onDelete={handleDelete}>
          <Text label='Ciudad de México' />
          <Text label='Contacto: 555-0101' />
        </Card>
        <Card title='TechCor3' onEdit={handleEdit} onDelete={handleDelete}>
          <Text label='Ciudad de México' />
          <Text label='Contacto: 555-0101' />
        </Card>
        <Card title='TechCor3' onEdit={handleEdit} onDelete={handleDelete}>
          <Text label='Ciudad de México' />
          <Text label='Contacto: 555-0101' />
        </Card>
      </div>
    </>
  )
}


