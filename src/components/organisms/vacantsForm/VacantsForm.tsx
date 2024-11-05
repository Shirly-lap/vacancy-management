import { INewVacant } from '@/model/vacancies/vacant.model'
import { JobsService } from '@/services/jobs.service'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Form } from '../form/Form'
import { InputLabel } from '@/components/molecules/InputLabel'
import { TextAreLabel } from '@/components/molecules/TextAreLabel'
import { SelectLabel } from '@/components/molecules/SelectLabel'
import { Button } from '@/components/atoms/Button'
import styleModal from "../../organisms/modals/Modal.module.scss"
import { Content } from '@/model/companies/company.model'


const VacantsForm = () => {
  const bodyVacant: INewVacant = {
    title: "",
    description: "",
    status: "",
    companyId: ""
  }

  const url = "vacants"
  const urlCompany = "company"

  const router = useRouter();
  const useVacantService = new JobsService()

  const [vacant, setVacant] = useState<INewVacant>(bodyVacant);
  const [company, setCompany] = useState<Content[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setVacant(rest => ({ ...rest, [name]: value }))
  }

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(vacant)

    try {
      await useVacantService.create(url, vacant);
      setVacant(bodyVacant)
      router.refresh()
      alert(`se agrego la vacante ${vacant.title}`)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("cargando componente");
    const fetchCompany = async () => {
      const responseCompanies = await useVacantService.findAll(1, 10, urlCompany)
      console.log(responseCompanies);
      setCompany(responseCompanies.content as Content[])
    }
    fetchCompany()
  }, []
  )
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputLabel labelInput="Titulo" inputType="text"
          htmlForm='titulo-input'
          idInput='titulo-input'
          nameInput='title'
          value={vacant.title}
          onChange={handleChange}
        />

        <TextAreLabel label="Descripción" name="description" id="description" value={vacant.description} onChange={handleChange} />

        <SelectLabel valueSelect={vacant.status} label="Estado" id="status" name="status" onChange={handleChange}>
          <option id='status' value="ACTIVE">Activo</option>
          <option id='status' value="INACTIVE">Inactivo</option>
        </SelectLabel>

        <SelectLabel label="Compañía" id="companyId" name="companyId" valueSelect={vacant.companyId} onChange={(e) => { handleChange(e) }}>
          <option>Selecciona una compañía</option>
          {company.map((temporal) => (
            <option value={temporal.id} key={temporal.id} >{temporal.name}</option>
          ))}
        </SelectLabel>

        <Button type="submit" styleClass={styleModal.btnBgPrimary} label="Agregar" />
      </Form>
    </>
  )
}

export default VacantsForm
