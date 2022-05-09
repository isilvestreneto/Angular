import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  emitirCursoCriado: any;
  constructor() {}

  getCursos() {
    return ['Java', 'Ext JS', 'Angular'];
  }
}