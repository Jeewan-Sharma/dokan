import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: '/home',
      },
      {
        label: 'Categories',
      },
      {
        label: 'Sale',
      },
      {
        label: 'Contact Us',
      },

      {
        icon: 'pi pi-fw pi-user',
        items: [
          {
            icon: 'pi pi-fw pi-user',
            label: 'Profile',
          },
          {
            icon: 'pi pi-fw pi-shopping-cart',
            label: 'Cart',
            routerLink: '/cart',
          },

          {
            icon: 'pi pi-fw pi-power-off',
            label: 'Log Out',
          },
        ],
      },
    ];
  }
}
