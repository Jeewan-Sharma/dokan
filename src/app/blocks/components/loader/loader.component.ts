import { Component } from '@angular/core';
import { LoaderService } from '@core/services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoading: BehaviorSubject<boolean> = this.loadingService.loading$
  constructor(private loadingService: LoaderService) {
  }

}
