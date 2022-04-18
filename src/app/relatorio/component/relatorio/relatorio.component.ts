import { RELATORIOINTERFACE } from '../../models/relatorio.constants';
import { DadosGlobal } from '../../models/relatorio';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DADOSGLOBAL } from '../../models/relatorio.constants';
import { RelatorioInterface } from '../../models/relatorio';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css'],
})
export class RelatorioComponent implements OnInit {
  @Input() dados: null | DadosGlobal = DADOSGLOBAL;
  @Input() paises: null | string[] = [];
  @Input() detalhes: null | RelatorioInterface = RELATORIOINTERFACE;

  pesquisaPais!: FormGroup;

  @Output() onPesquisar: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.pesquisaPais = this.fb.group({
      nomePais: '',
    });
  }

  enviar() {
    this.onPesquisar.emit(this.pesquisaPais.value);
  }
}
