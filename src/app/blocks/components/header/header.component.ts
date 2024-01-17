import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ASSETS } from "@core/consts";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  readonly ASSETS = ASSETS

  constructor(public _router: Router) { }
  cartClicked() { }
  favouritesClicked() { }
}
