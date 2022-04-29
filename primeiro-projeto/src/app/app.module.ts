import { CursosService } from './cursos/cursos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [AppComponent, MeuPrimeiro2Component, DiretivaNgifComponent],
  imports: [BrowserModule, CursosModule],
  providers: [CursosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
