import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customCardSettings1 = {
    bgColor: ['bg-card-primary'],
    cardWidth: ['pill-w-1', 'pill-h-xs'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };

  customCardSettings11 = {
    bgColor: ['bg-card-primary'],
    cardWidth: ['pill-w-1', 'pill-h-s'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };

  customCardSettings2 = {
    bgColor: ['bg-card-default'],
    cardWidth: ['pill-w-1', 'pill-h-xs'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };

  customCardSettings3 = {
    bgColor: ['bg-card-default'],
    cardWidth: ['pill-h-m'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };

  customCardSettings4 = {
    bgColor: ['bg-card-default'],
    cardWidth: ['pill-h-m'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };

  customCardSettings5 = {
    bgColor: ['bg-card-default'],
    cardWidth: ['pill-h-s'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center', 'justify-content-around']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
