import { Component, OnInit } from '@angular/core';
import { CountdownService } from '@core/services';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss'
})
export class AnnouncementComponent implements OnInit {
  countdown$ = this._countdownService.countdown$;
  constructor(private _countdownService: CountdownService) { }
  ngOnInit(): void {
    // setting the target day for 3 days from now for test
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    this._countdownService.startCountdown(targetDate);
  }
}
