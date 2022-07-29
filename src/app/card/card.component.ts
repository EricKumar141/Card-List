import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cards: Card;
  constructor() {}
  @Output() cardDetails = new EventEmitter();
  setCardDetails() {
    this.cardDetails.emit(this.cards);
  }
  ngOnInit() {}
}
