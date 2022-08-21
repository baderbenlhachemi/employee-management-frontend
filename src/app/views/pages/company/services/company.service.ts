import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Company} from "../models/company.model";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpclient: HttpClient) {
  }

  getAll(): Observable<Company[]> {
    return this.httpclient.get<Company[]>('http://localhost:8080/api/v1/company/');
  }

  getById(id: number): Observable<Company> {
    return this.httpclient.get<Company>('http://localhost:8080/api/v1/company/get/' + id);
  }

  add(company: Company): Observable<Company> {
    return this.httpclient.post<Company>('http://localhost:8080/api/v1/company/add', company);
  }

  update(id: number, company: Company): Observable<Company> {
    return this.httpclient.put<Company>('http://localhost:8080/api/v1/company/update/' + company.id, company);
  }

  delete(id: number): Observable<void> {
    return this.httpclient.delete<void>('http://localhost:8080/api/v1/company/delete/' + id);
  }

  uploadImageData(id: number, image: File): Observable<Object> {
    const formData = new FormData();
    formData.append('image', image);
    return this.httpclient.post<any>('http://localhost:8080/api/v1/company/upload/' + id, formData);
  }
}
