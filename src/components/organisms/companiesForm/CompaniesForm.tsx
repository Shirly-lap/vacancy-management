import { INewCompany } from "@/model/companies/company.model"
import { JobsService } from "@/services/jobs.service";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { Form } from "../form/Form";
import styleModal from "../../organisms/modals/Modal.module.scss"
import { InputLabel } from "@/components/molecules/InputLabel";
import { Button } from "@/components/atoms/Button";

const bodyCompany: INewCompany = {
  name: "",
  location: "",
  contact: ""
}

const url = "company"

const CompaniesForm = () => {
  const router = useRouter();
  const useCompanyService = new JobsService()

  const [company, setCompany] = useState<INewCompany>(bodyCompany);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCompany(previusData => ({ ...previusData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      await useCompanyService.create(url, company);
      setCompany(bodyCompany)
      router.refresh()
      alert(`Se agrego la compañía ${company.name}`)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputLabel
          labelInput="Nombre"
          inputType="text"
          htmlForm="name-input"
          idInput="name-input"
          nameInput="name" 
          value={company.name}
          onChange={handleChange}
        />
        <InputLabel
          labelInput="Ubicación"
          inputType="text"
          htmlForm="location-input"
          idInput="location-input"
          nameInput="location" 
          value={company.location}
          onChange={handleChange}
        />
        <InputLabel
          labelInput="Contacto"
          inputType="number"
          htmlForm="contact-input"
          idInput="contact-input"
          nameInput="contact" 
          value={company.contact}
          onChange={handleChange}
        />

        <Button type="submit" styleClass={styleModal.btnBgSecondary} label="Agregar" />
      </Form>
    </>
  )
}

export default CompaniesForm