import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderService } from '@core/services';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BehaviorSubject } from 'rxjs';

const primeNgModules = [ProgressSpinnerModule];

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, primeNgModules],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})

export class LoaderComponent {
  isLoading: BehaviorSubject<boolean> = this.loadingService.loading$
  constructor(private loadingService: LoaderService) {
  }

}
