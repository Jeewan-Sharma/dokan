import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  showLoader() {
    setTimeout(() => {
      this.loading$.next(true);
    });
    console.log('show loader is called')
  }

  hideLoader() {
    setTimeout(() => {
      this.loading$.next(false);
    });
    console.log('hide loader is called')
  }
}
