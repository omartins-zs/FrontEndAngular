import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';

@Component({
    selector: 'app-funcionario-form',
    templateUrl: './funcionario-form.component.html',
    styleUrls: ['./funcionario-form.component.css']
})

export class FuncionarioFormComponent implements OnInit {
    @Output() onSubmit = new EventEmitter<Funcionario>();

    funcionarioForm!: FormGroup;

    ngOnInit(): void {

        this.funcionarioForm = new FormGroup({
            id: new FormControl(0),
            nome: new FormControl('', [Validators.required]),
            sobrenome: new FormControl( '', [Validators.required]),
            departamento: new FormControl('', [Validators.required]),
            turno: new FormControl('', [Validators.required]),
            ativo: new FormControl(true),
            dataDeCriacao: new FormControl(new Date()),
            dataDeAlteracao: new FormControl(new Date())
        });
    }

}

