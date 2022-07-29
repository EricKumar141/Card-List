import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../interfaces/card.interface';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent implements OnInit {
  constructor() {}
  @Input() currCards: Card;
  ngOnInit() {}
}
