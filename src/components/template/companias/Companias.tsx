"use client";
import { Header } from '@/components/organisms/header/Header';
import { icons } from '@/model/Icon';
import style from "../../../components/organisms/header/Header.module.scss";
import styleCrad from "../../../components/organisms/card/Card.module.scss"
// import styleModal from "../../organisms/modals/Modal.module.scss"
import React, { useState } from 'react'
import { Card } from '@/components/organisms/card/Card'
import { Text } from '@/components/atoms/Text'
import Modal from '@/components/organisms/modals/Modal';
// import { Form } from '@/components/organisms/form/Form';
// import { InputLabel } from '@/components/molecules/InputLabel';
// import { Button } from '@/components/atoms/Button';
import { IGetCompaniesRespone } from '@/model/companies/company.model';
import { Paginator } from '@/components/organisms/paginator/Paginator';
import { useSearchParams, useRouter } from 'next/navigation';
import { JobsService } from '@/services/jobs.service';
import CompaniesForm from '@/components/organisms/companiesForm/CompaniesForm';


interface IProps {
  data: IGetCompaniesRespone,
}
export default function Companias({ data }: IProps) {
  const url = "company"

  const [modal, setModal] = useState<boolean>(false)

  const useCompanyService = new JobsService()

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleEdit = () => {
    console.log("actualizar");
  };

  const handleDelete = async (id: string) => {
    const confirmaTion = confirm("Seguro que quieres eliminar?")

    if (!confirmaTion) return

    try {
      await useCompanyService.delete(id, url)
      router.refresh()
    } catch (error) {
      console.log(error);
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
      <Header title='Compañias' name='Agregar compañia' btnColor={style.colorBtnSecondary} icon={icons.add} modal={add} />
      <Modal className="addVancantes" title="Agregar compañia" onClose={add} state={modal}>
        {/* <Form>
          <InputLabel labelInput="Nombre" inputType="text" />
          <InputLabel labelInput="Ubicación" inputType="text" />
          <InputLabel labelInput="Contacto" inputType="number" />

          <Button type="submit" styleClass={styleModal.btnBgSecondary} label="Agregar" />
        </Form> */}
        <CompaniesForm/>
      </Modal>
      <div className={styleCrad.cardsList}>
        {data.content.map((company, index) => (
          <Card title={company.name} onEdit={handleEdit} onDelete={() => handleDelete(company.id)} key={index}>
            <Text label={company.location} />
            <Text label={company.contact} />
          </Card>
        ))}

      </div>

      <Paginator currentPage={currentPage} totalPages={totalPages} onPrev={handlePrevPage} onNext={handleNextPage} />

    </>
  )
}


