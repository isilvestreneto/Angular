import { CursosService } from './cursos/cursos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';

@NgModule({
  declarations: [AppComponent, MeuPrimeiroComponent, MeuPrimeiro2Component, DiretivaNgifComponent],
  imports: [BrowserModule, CursosModule],
  providers: [CursosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
