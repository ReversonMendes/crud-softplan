import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pessoa } from '../models/pessoa.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + btoa('admin:admin')
  })
};

@Injectable()
export class PessoaService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/cadastros';

  public getPessoas() {
    return this.http.get<Pessoa[]>(this.baseUrl, httpOptions);
  }

  public deletePessoa(pessoa) {
    return this.http.delete(this.baseUrl + '/' + pessoa.id, httpOptions);
  }

  public createPessoa(pessoa) {
    return this.http.post<Pessoa>(this.baseUrl, pessoa, httpOptions);
  }

  public getPessoaId(id) {
    return this.http.get<Pessoa>(this.baseUrl + '/' + id, httpOptions);
  }

  async getPessoaCpf(cpf){
    return await this.http.get<Pessoa>(this.baseUrl + '/cpf/' + cpf, httpOptions).toPromise();
  }

  public updatePessoa(pessoa) {
    return this.http.put<Pessoa>(this.baseUrl + '/' + pessoa.id, pessoa, httpOptions);
  }

}
