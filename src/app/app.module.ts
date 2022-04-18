import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './relatorio/container/principal/principal.component';
import { RelatorioComponent } from './relatorio/component/relatorio/relatorio.component';
import { NumerosGlobaisComponent } from './relatorio/component/numeros-globais/numeros-globais.component';
import { PesquisaComponent } from './relatorio/component/pesquisa/pesquisa.component';
import { RelatorioPipe } from './relatorio/pipes/data.pipe';
import { NumeroPipe } from './relatorio/pipes/numero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RelatorioComponent,
    PrincipalComponent,
    NumerosGlobaisComponent,
    PesquisaComponent,
    RelatorioPipe,
    NumeroPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
