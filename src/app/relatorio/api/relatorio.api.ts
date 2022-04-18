import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RelatorioService {
  constructor(private httpClient: HttpClient) {}

  dadosAPI() {
    let headers = new HttpHeaders();
    headers = headers.set(
      'X-RapidAPI-Key',
      '13b7bf58e2mshaf77c925d07d9fdp137bdajsn3384835bddee'
    );
    return this.httpClient.get(
      'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
      { headers }
    );
  }

  paises() {
    let headers = new HttpHeaders();
    headers = headers.set(
      'X-RapidAPI-Key',
      '13b7bf58e2mshaf77c925d07d9fdp137bdajsn3384835bddee'
    );
    return this.httpClient.get('https://covid-193.p.rapidapi.com/countries', {
      headers,
    });
  }

  porPais(nomePais: string) {
    let headers = new HttpHeaders();
    headers = headers.set(
      'X-RapidAPI-Key',
      '13b7bf58e2mshaf77c925d07d9fdp137bdajsn3384835bddee'
    );
    return this.httpClient.get(
      'https://covid-193.p.rapidapi.com/statistics?country=' + nomePais,
      { headers }
    );
  }
}
