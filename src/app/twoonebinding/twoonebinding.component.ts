import { Component } from '@angular/core';

@Component({
  selector: 'app-twoonebinding',
  templateUrl: './twoonebinding.component.html',
  styleUrls: ['./twoonebinding.component.css']
})
export class TwoonebindingComponent {

 edad:number=0
 resp:string=""
comprobar()
{
  if(this.edad>18)
{
  this.resp="Eres mayor de edad"
}
else
{
  this.resp="Eres menor de edad"
}
}

}
