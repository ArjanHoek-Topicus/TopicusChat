import { Component, OnInit } from '@angular/core';
import { createMessages, createUser } from 'src/mock';
import { IMessage } from 'src/models/messageInterface';
import { IUser } from 'src/models/userInterface';
import { UserService } from 'src/services/user-service.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent implements OnInit {
  clients!: IUser[];
  messages!: IMessage[];
  currentUser!: IUser;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.clients = this.userService.listUsers();
    this.messages = createMessages(this.clients);
    this.currentUser = this.clients[0];
  }

  addMessage(message: IMessage) {
    this.messages.push(message);
  }

  addClient() {
    this.userService.addUserToChat();
  }

  removeClient(user: IUser) {
    this.userService.removeUserFromChat(user);
  }
}
