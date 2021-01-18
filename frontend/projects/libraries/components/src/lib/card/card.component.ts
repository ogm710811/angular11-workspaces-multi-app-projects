import { Component, Input, OnInit } from '@angular/core';
import { CardSettings } from '../models/card-settings';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  get customCardClasses(): string[] {
    let settings: string[] = [];
    for (const key in this.cardConfig) {
      if (this.cardConfig) {
        if (key === 'bgColor' || key === 'cardWidth') {
          const width = this.cardConfig.cardWidth;
          // @ts-ignore
          settings = (this.cardConfig.bgColor).concat(width);
        }
      }
    }
    return settings;
  }

  get customCardBgColor(): string[] {
    let settings: string[] = [];
    for (const key in this.cardConfig) {
      if (this.cardConfig) {
        if (key === 'bgColor') {
          settings = [...this.cardConfig[key]];
        }
      }
    }
    return settings;
  }

  get customCardWidth(): string[] {
    let settings: string[] = [];
    for (const key in this.cardConfig) {
      if (this.cardConfig) {
        if (key === 'cardWidth') {
          settings = [...this.cardConfig[key]];
        }
      }
    }
    return settings;
  }

  get customCardBodyAlignment(): string[] {
    let settings: string[] = [];
    for (const key in this.cardConfig) {
      if (this.cardConfig) {
        if (key === 'bodyAlignment') {
          settings = [...this.cardConfig[key]];
        }
      }
    }
    return settings;
  }

  get notification(): boolean {
    return this.cardSettings.hasNotification;
  }
  get iconBadge(): boolean {
    return this.cardSettings.hasIconBadge;
  }

  @Input()
  set cardConfig(customCardSettings: CardSettings) {
    if (customCardSettings) {
      this.cardSettings = {...customCardSettings};
    }
  }

  get cardConfig(): CardSettings {
    return this.cardSettings;
  }

  private cardSettings: CardSettings = {
    bgColor: [],
    cardWidth: [],
    hasNotification: false,
    hasIconBadge: false,
    bodyAlignment: []
  };

  constructor() { }

  ngOnInit(): void {
  }
}
