import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {

  id: number=0;
  constructor(private ruta: Router, private activarRuta: ActivatedRoute){
    this.id=this.activarRuta.snapshot.params["id"]
  }


 volver(){
    this.ruta.navigate(['padre1'])
  }
}
