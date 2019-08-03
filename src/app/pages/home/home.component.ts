import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/responsive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class HomeComponent implements OnInit {

  constructor(private responsiveService: ResponsiveService) { }

  ngOnInit() {
  }

  onWindowResize(event) {
    this.responsiveService.checkWidth()
  }

}
