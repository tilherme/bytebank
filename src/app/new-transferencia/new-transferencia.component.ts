import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-transferencia',
  templateUrl: './new-transferencia.component.html',
  styleUrls: ['./new-transferencia.component.scss']
})
export class NewTransferenciaComponent implements OnInit {
  @Output()aoTransfere = new EventEmitter<any>();
  constructor() { }
  value: number;
  destino: string;
  
  ngOnInit(): void {
  }
  transferir() {
    console.log(this.value, this.destino);
   const valueemit = {value: this.value, destino: this.destino}
   this.aoTransfere.emit(valueemit);

   this.clear();
  }
  clear(){
    this.value = 0;
    this.destino = '';
  }

}
