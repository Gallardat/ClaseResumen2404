import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-hijo1',
  templateUrl: './padre-hijo1.component.html',
  styleUrls: ['./padre-hijo1.component.css']
})
export class PadreHijo1Component {
  envio: any;
  padreHijo()
  {
    this.envio="ENVIADO A HIJO"
  }
}
