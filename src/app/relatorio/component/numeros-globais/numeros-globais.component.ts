import { DadosGlobal, RelatorioInterface } from '../../models/relatorio';
import { Component, Input, OnInit } from '@angular/core';
import { DADOSGLOBAL, RELATORIOINTERFACE } from '../../models/relatorio.constants';


@Component({
  selector: 'app-numeros-globais',
  templateUrl: './numeros-globais.component.html',
  styleUrls: ['./numeros-globais.component.css']
})
export class NumerosGlobaisComponent implements OnInit {

  @Input() dados: null | DadosGlobal = DADOSGLOBAL;
  @Input() paises: null | string[] = [];
  @Input() detalhes: null | RelatorioInterface = RELATORIOINTERFACE;

  constructor() {}

  ngOnInit(): void {
  }


}
