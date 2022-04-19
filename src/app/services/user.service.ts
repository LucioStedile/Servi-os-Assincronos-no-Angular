import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  //endereço abaixo foi gerado de uma api criada no sheetbest pelo professor para simular um banco de dados

  apiUrl = 'https://sheet.best/api/sheets/e75b38d5-7cc1-4645-bb9f-1c38909069c3';

  htttpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - CREATE, READ, UPDATE, DELETE

  // Retorna a lista de usuário READ
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // Salva usuário no banco CREATE
  postUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.htttpOptions);
  }

  // Exclui o usuário do banco DELETE
  deleteUser(id: number):Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`);
  }

  // Edita usuario UPDATE
  updateUser(id: string, user: User):Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`,user,this.htttpOptions);
  }

  // Lista usuário único
  getUser(id: string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`);
  }
}
