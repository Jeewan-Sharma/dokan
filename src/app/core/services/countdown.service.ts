import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  private countdownSubject = new BehaviorSubject<number>(0);
  public countdown$: Observable<string>;

  constructor() {
    this.countdown$ = this.countdownSubject.pipe(
      map((seconds) => this.secondsToTime(seconds))
    );
  }

  startCountdown(targetDate: Date): void {
    const targetTime = targetDate.getTime();
    interval(1000)
      .pipe(
        map(() => Math.floor((targetTime - new Date().getTime()) / 1000)),
        takeWhile((seconds) => seconds >= 0)
      )
      .subscribe((seconds) => this.countdownSubject.next(seconds));
  }

  private secondsToTime(seconds: number): string {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${days} Days ${hours}H: ${minutes}M: ${remainingSeconds}S`;
  }
}
