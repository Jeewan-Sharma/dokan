import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-under-development',
  templateUrl: './under-development.component.html',
  styleUrls: ['./under-development.component.scss'],
})
export class UnderDevelopmentComponent {
  constructor(private router: Router) {}
  returnToHome() {
    this.router.navigate(['/']);
  }
}
