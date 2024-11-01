import Vacantes from '@/components/template/vacantes/Vacantes'
import { JobsService } from '@/services/jobs.service'
import React from 'react'

export interface IPageProps {
  searchParams: {
    page: string;
    size: string;
    name: string;
  }
};

const useVacantService = new JobsService()

export const generateMetadata = async ({ searchParams }: IPageProps) => {
  const page = searchParams.page ?? 1;
  return {
    title: `Clientes - Página ${page}`,
    description: 'Gestion de vacantes'
  }
}


export default async function page({ searchParams }: IPageProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 6;
  const url = "vacants"

  const data = await useVacantService.findAll(page, size, url)
  console.log(data);

  return (
    <>
      <Vacantes data={data} />
    </>
  )
}
