import { Component, OnInit } from '@angular/core';
import {trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('350ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('350ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class MobileHeaderComponent implements OnInit {
  navMenuOpened = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavMenu() {
    this.navMenuOpened = !this.navMenuOpened;
  }

}
