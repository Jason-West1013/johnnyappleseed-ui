import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent implements OnInit {
  navMenuOpened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openNavMenu() {
    this.navMenuOpened = !this.navMenuOpened
  }

}
