import { Injectable } from '@angular/core';
import { Libro } from '../domain/Libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  libri:Libro[] = [
    {id:1, tipo:'guida', titolo:'Guida 1 ', autore:'Autore 1'},
    {id:2, tipo:'manuale', titolo:'Manuale utente 1', autore:'Sviluppatore 1'},
    {id:3, tipo:'guida', titolo:'Guida 2 ', autore:'Autore 2'},
    {id:4, tipo:'manuale', titolo:'Manuale utente 2', autore:'Sviluppatore 1'}
  ]
  url:string = 'http://localhost:9999/api/libri';

  constructor() { }



  getLibri(): Observable<Libro[]>{
    return new Observable((observer)=>{
      observer.next(this.libri);
    });
  }

  getLibro(id:number):Observable<Libro>{
    return new Observable((observer)=>{
      let libro = this.libri.find((item)=>item.id==id);
      observer.next(libro);
    });
  }

    

  addeditLibro(libro:Libro):Observable<Libro>{   
    return new Observable((observer)=>{
      let libroDaModificare:number = this.libri.findIndex((item)=>item.id==libro.id);
      console.log(libro)
      if (  libroDaModificare>=0)
        this.libri[libroDaModificare] = libro;
      else
        this.libri.push(libro);
      
      observer.next(libro);
    });
  }

  deleteLibro(id:number):Observable<Libro>{  
    console.log(id)
    return new Observable((observer)=>{
      let libroDaEliminare:number = this.libri.findIndex((item)=>item.id==id);
      console.log(libroDaEliminare)
      this.libri.splice(libroDaEliminare, 1);
      observer.next();
    });
  }

}
