import { Injectable } from '@angular/core';

// TODO: may want to add other screen sizes to test for....
@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private isMobile: boolean;

  constructor() {
    this.checkWidth();
  }

  getMobileStatus(): boolean {
    return this.isMobile;
  }

  checkWidth() {
    const width = window.innerWidth;
    if (width <= 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

}
