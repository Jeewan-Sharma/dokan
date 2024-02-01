import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProducts } from '@core/models';
import { ToastService } from '@core/services';

import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-details-view',
  standalone: true,
  imports: [CommonModule, FormsModule, RatingModule],
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.scss'
})
export class DetailsViewComponent {
  @Input() product!: IProducts;
}
