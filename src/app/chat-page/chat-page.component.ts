import { Component, OnInit } from '@angular/core';
import { createMessages, createName, createNames } from 'src/mock';
import { IMessage } from 'src/models/messageInterface';
import { UserService } from 'src/services/user-service.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent implements OnInit {
  clients!: string[];
  messages!: IMessage[];
  currentUser!: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.clients = this.userService.listUsers();
    this.messages = createMessages(this.clients);
    this.currentUser = this.clients[0];
  }

  addMessage({ clientName, text, timestamp }: IMessage) {
    const message: IMessage = { clientName, text, timestamp };
    this.messages.push(message);
  }

  addClient() {
    this.userService.addUserToChat(createName());
  }

  removeClient(name: string) {
    this.userService.removeUserFromChat(name);
  }
}
