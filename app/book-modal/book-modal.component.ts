import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-book-modal',
  template: `
    <div #myModal class="container">
    <div class="content">
      <p>Name</p>
      <input type = "text">
      <p>Author</p>
      <input type = "text">
      <button (click)="addBook()">Close</button>
    </div>
    </div>
  `,
  styleUrls: ['./book-modal.component.css'],
})
export class BookModalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @ViewChild('myModal') modal: ElementRef;

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  addBook() {
    this.modal.nativeElement.style.display = 'none';
  }
}
