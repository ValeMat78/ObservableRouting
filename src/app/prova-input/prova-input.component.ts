import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prova-input',
  templateUrl: './prova-input.component.html',
  styleUrl: './prova-input.component.css'
})
export class ProvaInputComponent {
  @Input() nome: number | undefined;

  constructor() { 
    console.log('ProvaInputComponent constructor',this.nome );

  }
  ngOnInit(): void {  
    console.log('ProvaInputComponent ngOnInit',this.nome );
  }
}
