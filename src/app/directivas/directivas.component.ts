import { Component } from '@angular/core';
import { Color } from '../Color';
@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

arrayPersona:string[]=["Daniela","Maria","Carlos"]
enumColor: Color = Color.verde
color=Object.values(Color)
}
