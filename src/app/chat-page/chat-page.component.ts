import { Component } from '@angular/core';
import { createMessages, createName, createNames } from 'src/mock';
import { IMessage } from 'src/models/messageInterface';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent {
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
