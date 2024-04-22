import { Component } from '@angular/core';
import { ASSETS } from '@core/consts';

@Component({
  selector: 'app-error-on-load',
  standalone: true,
  imports: [],
  templateUrl: './error-on-load.component.html',
  styleUrl: './error-on-load.component.scss'
})
export class ErrorOnLoadComponent {

  readonly ASSETS = ASSETS;

}
