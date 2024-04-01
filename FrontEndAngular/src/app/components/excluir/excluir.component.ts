import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
    selector: 'app-excluir',
    templateUrl: './excluir.component.html',
    styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

    inputdata: any;
    funcionar!: Funcionario;

    constructor(
        private FuncionarioService: FuncionarioService,
        private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    ngOnInit(): void {
        this.inputdata = this.data;
        console.log(this.data);
        // throw new Error('Method not implemented.');
    }

}
