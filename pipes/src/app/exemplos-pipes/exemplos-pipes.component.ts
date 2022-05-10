import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css'],
})
export class ExemplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'Estruturas de Dados e Algoritmos com JavaScript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 64.94,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://www.amazon.com.br/Estruturas-Dados',
  };

  livros: string[] = ['Java', 'Typescript', 'Figma'];

  addCurso(valor: string) {
    this.livros.push(valor);
  }

  filtro: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
