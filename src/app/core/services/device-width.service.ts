import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceWidthService {

  screenSize!: string;
  innerWidth!: number;

  constructor() {
    this.getScreenSize()
  }

  setWidth() {
    this.innerWidth = window.innerWidth;
  }
  async getScreenSize() {
    await this.setWidth()
    if (this.innerWidth < 786) {
      this.screenSize = 'sm'
    } else if (this.innerWidth > 786 && this.innerWidth <= 992) {
      this.screenSize = 'md'
    } else if (this.innerWidth > 992 && this.innerWidth <= 1200) {
      this.screenSize = 'lg'
    } else if (this.innerWidth > 1200) {
      this.screenSize = 'xl'
    }
  }
}
