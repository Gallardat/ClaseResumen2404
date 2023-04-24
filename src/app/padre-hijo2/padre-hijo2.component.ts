import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-padre-hijo2',
  templateUrl: './padre-hijo2.component.html',
  styleUrls: ['./padre-hijo2.component.css']
})
export class PadreHijo2Component {


  @Input() envios: any;


}
