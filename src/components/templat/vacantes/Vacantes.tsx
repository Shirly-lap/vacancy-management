"use client";

import { Header } from "@/components/organisms/header/Header";
import { icons } from "@/model/Icon";
import style from "../../../components/organisms/header/Header.module.scss";
import styleCrad from "../../../components/organisms/card/Card.module.scss";

import React from "react";
import { Card } from "@/components/organisms/card/Card";
import { Text } from "@/components/atoms/Text";

export default function Vacantes() {
  const handleEdit = () => {
    console.log("actualizar");
  };

  const handleDelete = () => {
    console.log("eliminar");
  };

  const add =()=>{
    alert("agregar una compania")

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
    </>
  );
}