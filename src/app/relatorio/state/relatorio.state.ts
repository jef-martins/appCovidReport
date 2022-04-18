import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"
import { DadosGlobal, RelatorioInterface } from "../models/relatorio"
import { DADOSGLOBAL, RELATORIOINTERFACE } from "../models/relatorio.constants"

@Injectable({
  providedIn:'root'
})

export class RelatorioState {

  public dados: BehaviorSubject<DadosGlobal> = new BehaviorSubject<DadosGlobal>(DADOSGLOBAL);
  public paises: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public detalhes: BehaviorSubject<RelatorioInterface> = new BehaviorSubject<RelatorioInterface>(RELATORIOINTERFACE)

  get dados$():BehaviorSubject<DadosGlobal>{
    return this.dados;
  }
  get dadosDocument():DadosGlobal{
    return this.dados.value;
  }
  set dadosDocument(value: DadosGlobal){
    this.dados.next(value);
  }
  get paises$():BehaviorSubject<string[]>{
    return this.paises;
  }
  get paisesCollection():string[]{
    return this.paises.value;
  }
  set paisesCollection(value: string[]){
    this.paises.next(value);
  }
  get detalhes$():BehaviorSubject<RelatorioInterface>{
    return this.detalhes;
  }
  get detalhesDocument():RelatorioInterface{
    return this.detalhes.value;
  }
  set detalhesDocument(value: RelatorioInterface){
    this.detalhes.next(value);
  }
}
