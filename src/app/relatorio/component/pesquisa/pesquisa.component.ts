import { RELATORIOINTERFACE } from '../../models/relatorio.constants';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RelatorioInterface } from '../../models/relatorio';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
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
