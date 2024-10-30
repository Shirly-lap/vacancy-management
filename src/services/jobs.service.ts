import { IGetCompaniesRespone } from "@/model/companies/company.model";

import { HttpJobs } from "@/utils/jobs-http";

export class JobsService {
  private httpJob: HttpJobs;

  constructor() {
    this.httpJob = new HttpJobs;
  }


  async findAll(page: number, size: number) {
    try {
      const response = this.httpJob.get<IGetCompaniesRespone>(`company?page=${page}&size=${size}`)
      return response
    } catch (error) {
      console.log(error);
      throw error
    }
  }



}