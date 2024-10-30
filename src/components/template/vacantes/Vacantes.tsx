"use client";

import { Header } from "@/components/organisms/header/Header";
import { icons } from "@/model/Icon";
import style from "../../../components/organisms/header/Header.module.scss";
import styleCrad from "../../../components/organisms/card/Card.module.scss";
import React, { useState } from "react";
import { Card } from "@/components/organisms/card/Card";
import { Text } from "@/components/atoms/Text";
import Modal from "@/components/organisms/modals/Modal";
import { InputLabel } from "@/components/molecules/InputLabel";
import { Button } from '../../atoms/Button';
import styleModal from "../../organisms/modals/Modal.module.scss"
import { SelectLabel } from "@/components/molecules/SelectLabel";
import { TextAreLabel } from "@/components/molecules/TextAreLabel";
import { Form } from "@/components/organisms/form/Form";
import { Paginator } from "@/components/organisms/paginator/Paginator";


export default function Vacantes() {
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
      <Header
        title="Vacantes"
        name="Agregar vancantes"
        btnColor={style.colorBtnPrimary}
        icon={icons.add}
        modal={add}
      />

      <Modal className="addVancantes" title="Agregar vacante" onClose={add} state={modal}>
        <Form>
          <InputLabel labelInput="Titulo" inputType="text" />

          <TextAreLabel label="Descripción" name="" id="">
          </TextAreLabel>

          <SelectLabel label="Estado" id="state" name="estado">
            <option value="">Open</option>
            <option value="">Close</option>
          </SelectLabel>

          <SelectLabel label="Compañía" id="state" name="estado">
            <option value="">Selecciona una compañía</option>
          </SelectLabel>
          
          <Button type="submit" styleClass={styleModal.btnBgPrimary} label="Agregar" />
        </Form>
      </Modal>
      <div className={styleCrad.cardsList}>
        <Card
          title="Desarrollador Frontend"
          onEdit={handleEdit}
          onDelete={handleDelete}
        >
          <Text label="Se busca desarrolador con experiencia en React" />
          <Text label="Estado: OPEN " />
          <Text label="Compañia: TechCorp" />
        </Card>
      </div>
      <Paginator currentPage="34" totalPages="100" onNext={handleDelete} onPrev={handleDelete}/>


    </>
  );
}
