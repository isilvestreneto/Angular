import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
})
export class CursoDetalheComponent implements OnInit {
  id: number = 1;
  inscricao: Subscription = new Subscription();
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.curso = this.cursosService.getCurso(this.id);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
