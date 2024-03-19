import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

const PrimeNgModules = [SkeletonModule]

@Component({
  selector: 'app-loading-list',
  standalone: true,
  imports: [CommonModule, PrimeNgModules],
  templateUrl: './loading-list.component.html',
  styleUrl: './loading-list.component.scss'
})
export class LoadingListComponent {


}
