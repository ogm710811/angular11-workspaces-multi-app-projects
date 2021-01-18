import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customCardSettings1 = {
    bgColor: ['bg-card-primary'],
    cardWidth: ['pill-h-s'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
