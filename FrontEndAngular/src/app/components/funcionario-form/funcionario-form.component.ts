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
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}

