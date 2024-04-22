import { Component, OnInit } from '@angular/core';
import { ASSETS } from '@core/consts';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  readonly ASSETS = ASSETS;
  constructor() { }
  ngOnInit(): void {

  }
}
