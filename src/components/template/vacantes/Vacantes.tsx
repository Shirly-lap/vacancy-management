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
import { JobsService } from "@/services/jobs.service";
import { useRouter, useSearchParams } from "next/navigation";
import { IGetVacantsRespone } from "@/model/vacancies/vacant.model";
import VacantsForm from "@/components/organisms/vacantsForm/VacantsForm";


interface IProps {
  data: IGetVacantsRespone;
}
export default function Vacantes({ data }: IProps) {
  const url = "vacants"
  const [modal, setModal] = useState<boolean>(false)

  const useVacantService = new JobsService()

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleEdit = () => {
    console.log("actualizar");
  };

  const handleDelete = async (id: number) => {
    const confirmation = confirm("Seguro que quieres eliminar?")

    if (!confirmation) return

    try {
      await useVacantService.delete(id, url)
      router.refresh()
    } catch (error) {
      console.log(error);
      throw error
    }
  };

  const add = () => {
    setModal(!modal)

  }

  const [currentPage, setCurrentPage] = useState(data.pageable.pageNumber + 1);
  const totalPages = data.totalPages;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', (currentPage - 1).toString());
      router.push(`?${params.toString()}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', (currentPage + 1).toString());
      router.push(`?${params.toString()}`);
    }
  };
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
        <VacantsForm  />
      </Modal>
      <div className={styleCrad.cardsList}>
        {data.content.map((vacante, index) => (
          <Card
            title={vacante.title}
            onEdit={handleEdit}
            onDelete={() => handleDelete(vacante.id)}
            key={index}
          >
            <Text label={vacante.description} />
            <Text label={`Estado: ${vacante.status} `} />
            <Text label={`Compañia: ${vacante.company.name}`} />
          </Card>
        ))}

      </div>
      <Paginator currentPage={currentPage} totalPages={totalPages} onNext={handleNextPage} onPrev={handlePrevPage} />


    </>
  );
}
