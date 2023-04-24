import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-padre2',
  templateUrl: './hijo-padre2.component.html',
  styleUrls: ['./hijo-padre2.component.css']
})
export class HijoPadre2Component {

  dato: string="envio hijo padre";
  @Output()  datosEnviado: EventEmitter<string>= new EventEmitter<string>();

  botonEnviar()
  {
    this.datosEnviado.emit(this.dato)
  }

}
