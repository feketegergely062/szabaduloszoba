import { Component } from '@angular/core';
import { BaseService } from '../base.service';


@Component({
  selector: 'app-foglalasok',
  standalone: true,
  imports: [],
  templateUrl: './foglalasok.component.html',
  styleUrl: './foglalasok.component.css'
})
export class FoglalasokComponent {

  headers = ["#", "Dátum", "Név", "Fő", "Helyszín", "Irányítószám"];

}
