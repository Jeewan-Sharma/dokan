import { Component } from '@angular/core';
import { ASSETS } from '@core/consts';

@Component({
  selector: 'app-auth-root',
  templateUrl: './auth-root.component.html',
  styleUrl: './auth-root.component.scss'
})
export class AuthRootComponent {
  readonly ASSETS = ASSETS;
}
