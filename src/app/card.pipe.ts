import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortCard',
})
export class CardPipe implements PipeTransform {
  transform(cardDescription: string): any {
    if (cardDescription.length > 100) {
      return cardDescription.slice(0, 100) + '...';
    } else {
      return cardDescription;
    }
  }
}
