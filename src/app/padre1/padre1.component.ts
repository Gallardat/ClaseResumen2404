import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-padre1',
  templateUrl: './padre1.component.html',
  styleUrls: ['./padre1.component.css']
})
export class Padre1Component {

  id:number=1
  nombre:string="Daniela "
  edad: number=19
  constructor(){

  }


}
