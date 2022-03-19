import { Component, OnInit } from '@angular/core';

export interface ativo {
  nome: string
  idade: number
  valor: number
}

@Component({
  selector: 'app-datatablebs',
  templateUrl: './datatablebs.component.html',
  styleUrls: ['./datatablebs.component.scss']
})
export class DatatablebsComponent implements OnInit {

  ativos: ativo[] = []

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log('cuuuuuuuu')
    this.ativos = [
      {nome: "vitor", idade: 666, valor: 0},
      {nome: "isaias", idade: 15, valor: 800},
    ]
    // this.service.getAll.subscribe(response => ( response.map(ativo => { this.ativos.push(ativo as ativo) })))
  }

}
