import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styleUrls: ['./padre2.component.css']
})
export class Padre2Component {

  id: number=1
  nombre: string="Manuel"
  apellido: string="Pérez"
  edad: number=25
  constructor(private router: Router){
  }
  ngOnit()
  {
    this.router.navigate(['hijo1'])
  }
}
