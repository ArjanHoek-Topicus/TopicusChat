import { Component } from '@angular/core';
import { IMessage } from 'src/models/messageInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  clients: string[] = ['giulio', 'heidi', 'florian'];

  messages: IMessage[] = [
    {
      clientName: this.clients[0],
      text: 'Hi there!',
      timestamp: new Date(),
    },
    {
      clientName: this.clients[1],
      text: 'Hi Giulio! How are you?',
      timestamp: new Date(),
    },
    {
      clientName: this.clients[2],
      text: "Giulio, you're still alive?",
      timestamp: new Date(),
    },
    {
      clientName: this.clients[0],
      text: "I'm doing very well, thank you! And yes, still going strong.",
      timestamp: new Date(),
    },
    {
      clientName: this.clients[1],
      text: "Oh, you're not going to ask me how we're doing? After all the work you left us with? Shame on you Giulio! I've had nightmares ever since you left...",
      timestamp: new Date(),
    },
    {
      clientName: this.clients[2],
      text: "Yeah Giulio, that's kind of rude...",
      timestamp: new Date(),
    },
  ];

  currentUser = this.clients[0];

  addMessage({ clientName, text, timestamp }: IMessage) {
    const message: IMessage = { clientName, text, timestamp };
    this.messages.push(message);
  }
}
