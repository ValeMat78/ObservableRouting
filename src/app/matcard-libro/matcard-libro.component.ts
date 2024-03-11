import { Component, EventEmitter, Input, Output ,OnInit} from '@angular/core';
import { Libro } from '../domain/Libro';
import { DatiService } from '../service/dati.service';

@Component({
  selector: 'app-matcard-libro',
  templateUrl: './matcard-libro.component.html',
  styleUrl: './matcard-libro.component.css'
})
export class MatcardLibroComponent {
  @Output() eventoAdd = new EventEmitter<Libro>();
  @Input() libro!: Libro ;


  add(tipo : string ){
    let libro:Libro = {id:this.libro.id, tipo:tipo, titolo:this.libro.titolo, autore:this.libro.autore};
    this.eventoAdd.emit(libro);
    
  }

}
