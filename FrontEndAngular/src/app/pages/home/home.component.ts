import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    funcionarios: Funcionario[] = [];
    funcionariosGeral: Funcionario[] = [];

    constructor(private funcionarioService: FuncionarioService) { }

    ngOnInit(): void {
        this.funcionarioService.GetFuncionarios().subscribe((data) => {
            console.log(data)
            const dados = data.dados;
            dados.map((item) => {
                item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR');
            });

            this.funcionariosGeral = dados;
            this.funcionarios = dados;
            // this.funcionarios = data.dados;
            // this.funcionariosGeral = data.dados;
        })
    }
}
