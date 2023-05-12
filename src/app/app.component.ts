import { Component } from '@angular/core';
import { createMessages, createName, createNames } from 'src/mock';
import { IMessage } from 'src/models/messageInterface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  clients: string[] = createNames(3);
  messages: IMessage[] = createMessages(this.clients);
  currentUser = this.clients[0];

  addMessage({ clientName, text, timestamp }: IMessage) {
    const message: IMessage = { clientName, text, timestamp };
    this.messages.push(message);
  }

  addClient() {
    this.clients.push(createName());
  }

  removeClient(name: string) {
    this.clients = this.clients.filter((x) => x != name);
  }
}
