import { Component, ViewChild } from '@angular/core';
import { BookModalComponent } from './book-modal/book-modal.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('modal') modal: BookModalComponent;

  openModal() {
    this.modal.open();
  }

  title = 'Welcome to the world of books';
  searchText;
  books = [
    { id: 11, name: 'The India Story', author: 'Bimal Jalal' },
    {
      id: 12,
      name: 'Listen to Your Heart: The London Adventure',
      author: 'Ruskin Bond',
    },
    { id: 13, name: 'Business of Sports', author: 'Vinit Karnik' },
    {
      id: 14,
      name: 'The Winning Formula for Success',
      author: 'Preeti Shenoy',
    },
    { id: 15, name: 'A Place Called Home', author: 'VP Venkaiah Naidu' },
    { id: 16, name: 'Dreams Meeting Delivery', author: 'Rajnath Singh' },
    { id: 17, name: 'Modi @20', author: 'Venkaiah Naidu' },
    {
      id: 18,
      name: 'The Struggle for Police Reforms in India',
      author: 'Ex-IPS Prakash Singh',
    },
    {
      id: 19,
      name: 'INDO-PAK WAR 1971- Reminiscences of Air Warriors',
      author: 'Rajnath Singh',
    },
  ];
}
