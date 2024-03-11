import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from '../domain/Libro';
import { Observable } from 'rxjs';
import { DatiService } from '../service/dati.service';

@Component({
  selector: 'app-matlist-libri',
  templateUrl: './matlist-libri.component.html',
  styleUrl: './matlist-libri.component.css'
})
export class MatlistLibriComponent {
  @Input() libri$: Observable< Libro[]> = new Observable();
  @Output() eventoEdit = new EventEmitter<Libro>();
  @Output() eventoDelete = new EventEmitter<number>();

  constructor(public datiService: DatiService) {   

  }

  delete(id: number) {
    this.eventoDelete.emit(id);
  }

  edit(libro: Libro) {
   this.eventoEdit.emit(libro);
  }
}
