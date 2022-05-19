import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainComponentComponent } from '../main-component/main-component.component'
import { TelaprincipalComponentComponent } from '../telaprincipal-component/telaprincipal-component.component'
import { TabelaComponentComponent } from '../tabela-component/tabela-component.component'

@Component({
  selector: 'app-cidade-component',
  templateUrl: './cidade-component.component.html',
  styleUrls: ['./cidade-component.component.scss']
})
export class CidadeComponentComponent implements OnInit {

  tela = 2;

  @Input() cidadeD: any;

  public formulario1: FormGroup = new FormGroup ({
    ncidade: new FormControl(''),
  });

  // @Output() retornaCidade = new EventEmitter();
  // @Output() nxtPage = new EventEmitter();
  @Output() chamaAdicionar = new EventEmitter();
  @Output() chamaPesquisar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log("tela 2:", this.cidadeD)
  }


  nextPage2(){
    console.log("entrou");
    this.chamaAdicionar.emit(this.tela);
  }

  nextPage3(){
    console.log("entrou");
    this.chamaPesquisar.emit(this.tela);
  }
  

}
