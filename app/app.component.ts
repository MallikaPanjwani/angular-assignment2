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
    {
      id: 11,
      name: 'the india story',
      author: 'Bimal Jalal',
      date: '20 Jun 2022',
    },
    {
      id: 12,
      name: 'Listen to Your Heart: The London Adventure',
      author: 'Ruskin Bond',
      date: '20 Jun 2022',
    },

    {
      id: 13,
      name: 'Business of Sports',
      author: 'Vinit Karnik',
      date: '20 Jun 2022',
    },
    {
      id: 14,
      name: 'The Winning Formula for Success',
      author: 'Preeti Shenoy',
      date: '20 Jun 2022',
    },
    {
      id: 15,
      name: 'A Place Called Home',
      author: 'VP Venkaiah Naidu',
      date: '20 Jun 2022',
    },
    {
      id: 16,
      name: 'Dreams Meeting Delivery',
      author: 'Rajnath Singh',
      date: '20 Jun 2022',
    },
    { id: 17, name: 'Modi @20', author: 'Venkaiah Naidu', date: '20 Jun 2022' },
    {
      id: 18,
      name: 'The Struggle for Police Reforms in India',
      author: 'Ex-IPS Prakash Singh',
      date: '20 Jun 2022',
    },
    {
      id: 19,
      name: 'INDO-PAK WAR 1971- Reminiscences of Air Warriors',
      author: 'Rajnath Singh',
      date: '20 Jun 2022',
    },
  ];
}
