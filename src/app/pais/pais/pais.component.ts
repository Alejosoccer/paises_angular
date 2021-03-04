import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisTablaComponent implements OnInit {
@Input() paises:Country[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
