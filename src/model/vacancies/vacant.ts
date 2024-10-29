export interface VacantResponse {
  id:          number;
  title:       string;
  description: string;
  status:      string;
  company:     Company;
}

export interface VacantRequest {
  title:       string;
  description: string;
  status:      string;
  companyId:   number;
}


export interface Company {
  id:       string;
  name:     string;
  location: string;
  contact:  string;
}

