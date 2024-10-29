"use client";
import { Header } from '@/components/organisms/header/Header';
import { icons } from '@/model/Icon';
import style from "../../../components/organisms/header/Header.module.scss";
import styleCrad from "../../../components/organisms/card/Card.module.scss"
import styleModal from "../../organisms/modals/Modal.module.scss"

import React, { useState } from 'react'
import { Card } from '@/components/organisms/card/Card'
import { Text } from '@/components/atoms/Text'
import Modal from '@/components/organisms/modals/Modal';
import { Form } from '@/components/organisms/form/Form';
import { InputLabel } from '@/components/molecules/InputLabel';
import { Button } from '@/components/atoms/Button';

export default function Companias() {

  const [modal, setModal] = useState<boolean>(false)
  const handleEdit = () => {
    console.log("actualizar");
  };

  const handleDelete = () => {
    console.log("eliminar");
  };

  const add = () => {
    setModal(!modal)

  }
  return (
    <>
      <Header title='Compañias ' name='Agregar compañia' btnColor={style.colorBtnSecondary} icon={icons.add} modal={add} />
      <Modal className="addVancantes" title="Agregar compañia" onClose={add} state={modal}>
        <Form>
          <InputLabel labelInput="Nombre" inputType="text" />
          <InputLabel labelInput="Ubicación" inputType="text" />
          <InputLabel labelInput="Contacto" inputType="number" />
        
          <Button type="submit" styleClass={styleModal.btnBgSecondary} label="Agregar" />
        </Form>
      </Modal>
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


