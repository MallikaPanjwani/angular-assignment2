import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { BookModalComponent } from './book-modal/book-modal.component';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2SearchPipeModule],
  declarations: [AppComponent, BookModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
