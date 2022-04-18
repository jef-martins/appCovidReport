import { Component, OnInit } from '@angular/core';
import { RelatorioFacade } from '../../relatorio.facade';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  constructor(public relatorioFacade: RelatorioFacade) {}

  ngOnInit(): void {
    this.listaPaises();
    this.relatorio();
    this.dadosDetalhados();

  }

  relatorio() {
    this.relatorioFacade.dadosRelatorio();
  }

  listaPaises() {
    this.relatorioFacade.nomesPaises();
  }

  dadosDetalhados(nomePais = 'Brazil') {
    this.relatorioFacade.dadosPorPais(nomePais);
  }

  pesquisar(event: any) {
    this.dadosDetalhados(event.nomePais);
  }
}
