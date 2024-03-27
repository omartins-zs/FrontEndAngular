import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from '../models/Funcionarios';
import { Response } from '../models/Response';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class FuncionarioService {

    private apiUrl = `${environment.ApiUrl}/Funcionario`

    constructor(private http: HttpClient) { }

    // Endpoint de Get
    GetFuncionarios(): Observable<Response<Funcionario[]>> {
        return this.http.get<Response<Funcionario[]>>(this.apiUrl);
    }

    // Endpoint de GetById
    GetFuncionario(id: number): Observable<Response<Funcionario>> {
        return this.http.get<Response<Funcionario>>(`${this.apiUrl}/${id}`);
    }

    // Endpoint POST
    CreateFuncionario(funcionario: Funcionario): Observable<Response<Funcionario[]>> {
        return this.http.post<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
    }

    // Endpoint PUT
    EditFuncionario(funcionario: Funcionario): Observable<Response<Funcionario[]>> {
        return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
    }

    // Endpoint PUT - InativaFuncionario

    /**
     * Realiza uma requisição PUT para inativar um funcionário.
     * @param id O identificador do funcionário a ser inativado.
     * @returns Um Observable que emite uma Response contendo um array de objetos do tipo Funcionario[].
     */
    // InativaFuncionario(id: number): Observable<Response<Funcionario[]>> {
    //     const url = `${this.apiUrl}/InativaFuncionario/${id}`;
    //     return this.http.put<Response<Funcionario[]>>(url, id);
    // }

    /**
    * Realiza uma requisição PUT para inativar um funcionário.
    * @param id O identificador do funcionário a ser inativado.
    * @returns Um Observable que pode emitir qualquer tipo de dado.
    */
    InativaFuncionario(id: number): Observable<any> {
        const url = `${this.apiUrl}/inativaFuncionario?id=${id}`;
        return this.http.put(url, {});
    }
}
