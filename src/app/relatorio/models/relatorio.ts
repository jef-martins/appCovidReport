export interface RelatorioInterface {
  cases: Casos;
  deaths: Mortes;
  tests: Testes;
  country: string;
  population: number;
  day: string;
}

export interface Casos {
  new: string,
  total: number,
  recovered: number
}

export interface Mortes {
  total: number;
  new: string;
}

export interface Testes {
  total: number
}

export interface DadosGlobal {
  deaths: number;
  confirmed: number
}
