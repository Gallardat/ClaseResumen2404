import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-padre1',
  templateUrl: './hijo-padre1.component.html',
  styleUrls: ['./hijo-padre1.component.css']
})
export class HijoPadre1Component {

  datoPedido: string="";

  boton(p: string)
  {
   this.datoPedido=p
  }

}
