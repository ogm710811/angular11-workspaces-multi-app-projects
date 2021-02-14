import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  workspaceSettings1 = {
    bgColor: ['bg-secondary'],
    cardWidth: ['pill-w-0', 'pill-h-xs'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center']
  };

  workspaceSettings2 = {
    bgColor: ['bg-white'],
    cardWidth: ['pill-w-0', 'pill-h-xs'],
    hasNotification: false,
    hasIconBadge: true,
    bodyAlignment: ['flex-column', 'align-items-center']
  };

  customCardSettings3 = {
    bgColor: ['bg-white'],
    cardWidth: ['pill-w-0', 'pill-h-xs'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center']
  };

  workspaceSettings4 = {
    bgColor: ['bg-white'],
    cardWidth: ['pill-w-0', 'pill-h-xs'],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center']
  };

  workspaceSettings5 = {
    bgColor: ['bg-white'],
    cardWidth: ['pill-w-0', 'pill-h-xs'],
    hasNotification: true,
    hasIconBadge: false,
    bodyAlignment: ['flex-column', 'align-items-center']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
