import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

    private apiUrl = `${environment.ApiUrl}/Funcionario`


  constructor() { }
}
