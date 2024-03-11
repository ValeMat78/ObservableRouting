import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../domain/Libro';
import { DatiService } from '../service/dati.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {

  libri$: Observable<Libro[]> = new Observable();
  libro: Libro = { id: 0, tipo: '', titolo: '', autore: '' };
  id: number = 0;

  constructor(public datiService: DatiService) {
    this.libri$ = datiService.getLibri();
  }


  addFormLibro() {
    this.libro = { id: -1, tipo: '', titolo: '', autore: '' };
    console.log(this.libro)
    this.datiService.addeditFormLibroVisibile$.next(true);
  }  

  add(libro: Libro) {
    console.log(libro)
    this.datiService.addeditLibro(libro).subscribe(
      () => {
        this.datiService.addeditFormLibroVisibile$.next(false);
      }

    );
    
  }

  editFormLibro(libro: Libro) {
    this.libro = libro;
    console.log(libro)
    this.datiService.addeditFormLibroVisibile$.next(true);

  }

  delete(id: number) {
    this.datiService.deleteLibro(id).subscribe(
      () => {
        this.libri$ = this.datiService.getLibri();
      }
    );
  }
}