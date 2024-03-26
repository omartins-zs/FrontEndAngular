import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
    selector: 'app-editar',
    templateUrl: './editar.component.html',
    styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

    btnAcao = "Editar";
    btnTitulo = "Editar Funcionário!";
    // Exclamacao por que sempre vai ser recebido
    funcionario!: Funcionario;

    constructor(private funcionarioService: FuncionarioService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        console.log(id)

        this.funcionarioService.GetFuncionario(id).subscribe((data) => {
            console.log(data)
            this.funcionario = data.dados;
        });
    }

    editFuncionario(funcionario: Funcionario) {

        this.funcionarioService.EditFuncionario(funcionario).subscribe(data => {
            this.router.navigate(['/']);
        });
    }
}
