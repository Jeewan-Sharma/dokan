import { Component } from '@angular/core';
import { ASSETS } from '@core/consts';

@Component({
  selector: 'app-empty-list',
  standalone: true,
  imports: [],
  templateUrl: './empty-list.component.html',
  styleUrl: './empty-list.component.scss'
})
export class EmptyListComponent {
  readonly ASSETS = ASSETS;
}
