import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardComponent } from './card/card.component';

import { CardPipe } from './card.pipe';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CardDetailsComponent,
    CardComponent,
    CardListComponent,
    CardPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
