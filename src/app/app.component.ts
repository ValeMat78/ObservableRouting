import { Component } from '@angular/core';
import { DatiService } from './service/dati.service';
import { Libro } from './domain/Libro';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


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
        setTimeout(() => {
          this.libri$ = this.datiService.getLibri();
          this.datiService.addeditFormLibroVisibile$.next(false);
        }, 2000);
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
