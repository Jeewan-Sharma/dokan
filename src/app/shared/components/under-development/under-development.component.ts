import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-under-development',
  templateUrl: './under-development.component.html',
  styleUrls: ['./under-development.component.scss'],
})
export class UnderDevelopmentComponent implements OnInit {
  constructor(private router: Router, private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.clearCart();
  }
  returnToHome() {
    this.router.navigate(['/']);
  }
}
