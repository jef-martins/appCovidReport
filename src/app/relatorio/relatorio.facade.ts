import { RelatorioState } from './state/relatorio.state';
import { Injectable } from '@angular/core';
import { RelatorioService } from './api/relatorio.api';

@Injectable({
  providedIn: 'root',
})
export class RelatorioFacade {
  dados$ = this.relatorioState.dados;
  paises$ = this.relatorioState.paises;
  detalhes$ = this.relatorioState.detalhes;

  constructor(
    private relatorioService: RelatorioService,
    private relatorioState: RelatorioState
  ) {}

  dadosRelatorio() {
    this.relatorioService.dadosAPI().subscribe((d: any) => {
      this.relatorioState.dadosDocument = d.data;
    });
  }
  nomesPaises() {
    this.relatorioService.paises().subscribe((p: any) => {
      this.relatorioState.paisesCollection = p.response;
    });
  }

  dadosPorPais(nomePais: string) {
    this.relatorioService.porPais(nomePais).subscribe((dd: any) => {
      [this.relatorioState.detalhesDocument] = dd.response;
    });
  }
}

// dadosPorPaisAdapt(dd){
//   const x = dd.response[0].cases
//   console.log(x)
//   for(let dados in x){
//     console.log(JSON.stringify(dados))
//   }
//   const cases = [null];
//   cases[0] = dd.response[0].cases
// }
