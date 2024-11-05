import { IGetCompaniesRespone, INewCompany } from "@/model/companies/company.model";

import { HttpClient } from "@/utils/jobs-http";
import { Content } from '../model/companies/company.model';
import { IGetVacantsRespone, INewVacant } from "@/model/vacancies/vacant.model";

export class JobsService {
  private httpJob: HttpClient;

  constructor() {
    this.httpJob = new HttpClient;
  }


  async findAll(page: number, size: number, url: string) {
    try {
      const response = this.httpJob.get<IGetCompaniesRespone | IGetVacantsRespone>(`${url}?page=${page}&size=${size}`)
      return response
    } catch (error) {
      console.log(error);
      throw error
    }
  }

  async create(url:string, body: INewCompany | INewVacant) {
    try {
      const response = this.httpJob.post<Content, INewCompany | INewVacant>(url, body);
      return response
    } catch (error) {
      console.log(error);
      throw error;

    }
  }


  async delete(id: number | string, url: string) {
    try {
      const response = this.httpJob.delete(`${url}/${id}`)
      return response

    } catch (error) {
      console.log(error);

      throw error

    }
  }


}