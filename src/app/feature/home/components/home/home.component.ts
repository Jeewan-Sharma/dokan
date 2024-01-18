import { Component, OnInit } from '@angular/core';
import { ASSETS } from '@core/consts';
import { DeviceWidthService } from '@core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  readonly ASSETS = ASSETS

  constructor(protected _deviceWidthService: DeviceWidthService) { }

  ngOnInit(): void { }

}
