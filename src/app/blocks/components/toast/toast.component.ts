import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeviceWidthService } from '@core/services';
import { ToastPositionType } from 'primeng/toast';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit, OnDestroy {
  toastPosition!: ToastPositionType;
  screenSizeSubscription!: Subscription;

  constructor(private _deviceWidthService: DeviceWidthService) { }

  ngOnInit() {
    this.screenSizeSubscription = this._deviceWidthService.screenSize$.pipe(
      map(screenSize => {
        if (screenSize === 'sm' || screenSize === 'md') {
          this.toastPosition = "top-center";
        } else {
          this.toastPosition = "bottom-center";
        }
      })
    ).subscribe();
  }

  ngOnDestroy() {
    if (this.screenSizeSubscription) {
      this.screenSizeSubscription.unsubscribe();
    }
  }

}
