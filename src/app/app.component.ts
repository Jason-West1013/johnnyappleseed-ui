import { Component, HostBinding, HostListener } from '@angular/core';
import { ResponsiveService } from './shared/services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private responsiveService: ResponsiveService) { }

  @HostListener('window:resize')
  onWindowResize() {
    this.responsiveService.checkWidth();
  }

  isMobile() {
    return this.responsiveService.getMobileStatus();
  }
}
