import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  messages: string[] = [
    'Hallo hoe gaat het?',
    'Lekker hoor, met jou?',
    'Mwoah, kon minder...',
    'Hallo hoe gaat het?',
    'Lekker hoor, met jou?',
    'Mwoah, kon minder...',
    'Hallo hoe gaat het?',
    'Lekker hoor, met jou?',
    'Mwoah, kon minder...',
    'Hallo hoe gaat het?',
    'Lekker hoor, met jou?',
    'Mwoah, kon minder...',
    'Hallo hoe gaat het?',
    'Lekker hoor, met jou?',
    'Mwoah, kon minder...',
    'Hallo hoe gaat het?',
    'Lekker hoor, met jou?',
    'Mwoah, kon minder...',
    'Hallo hoe gaat het?',
    'Lekker hoor, met jou?',
    'Mwoah, kon minder...',
    'Hallo hoe gaat het?',
    'Lekker hoor, met jou?',
    'Mwoah, kon minder...',
    'Hallo hoe gaat het?',
    'Lekker hoor, met jou?',
    'Mwoah, kon minder...',
    'Hallo hoe gaat het?',
    'Lekker hoor, met jou?',
    'Mwoah, kon minder...',
    'Hallo hoe gaat het?',
    'Lekker hoor, met jou?',
    'Mwoah, kon minder...',
    'Hallo hoe gaat het?',
    'Lekker hoor, met jou?',
    'Mwoah, kon minder...',
  ];
  clients: string[] = ['Giulio', 'Heidi', 'Florian'];

  addMessage(message: string) {
    this.messages.push(message);
  }
}
