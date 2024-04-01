import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/components/excluir/excluir.component';
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
    columnsToDisplay = ['Situacao', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Teste'];

    constructor(private funcionarioService: FuncionarioService, public dialog: MatDialog) { }

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

    search(event: Event) {
        const target = event.target as HTMLInputElement;
        const value = target.value.toLowerCase();

        this.funcionarios = this.funcionariosGeral.filter(funcionario => {
            return funcionario.nome.toLowerCase().includes(value);
        })
    }

    openDialog() {
        // openDialog(id : number){
        this.dialog.open(ExcluirComponent, {
            width: '350px',
            height: '350px',
            data: {
                // id: id
            }
            //   })

        })
        // }
    }
}
