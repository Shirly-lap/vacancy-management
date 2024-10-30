import React from 'react'
import Companias from '@/components/template/companias/Companias'
import { JobsService } from '@/services/jobs.service'



interface CompniesPageProps{
  searchParams: {
    page: string;
    size: string;
    name: string;
  }
}

const useCompanyService = new JobsService()


export const generateMetadata = async ({ searchParams}: CompniesPageProps)=> {
  const page = searchParams.page ?? 1;
  return {
    title: `Clientes - Página ${page}`,
    description: 'Gestion de compañias'
  }
}


export default async function page({searchParams } : CompniesPageProps ) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 6;

  const data = await useCompanyService.findAll(page, size);
  console.log(data);
  return (
    <>
      <Companias data={data} />
    </>
  )
}


