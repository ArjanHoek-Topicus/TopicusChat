import { Injectable } from '@angular/core';
import { createUsers } from 'src/mock';
import { IUser } from 'src/models/userInterface';

const mockUsers = createUsers(20);

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public activeUsers: IUser[];

  constructor() {
    this.activeUsers = mockUsers.slice(0, 2);
  }

  addUserToChat() {
    const newUser = mockUsers.find(
      (mockUser) => !this.activeUsers.find(({ name }) => name == mockUser.name)
    );

    if (newUser) {
      this.activeUsers.push(newUser);
    }
  }

  removeUserFromChat(user: IUser) {
    const index = this.activeUsers.findIndex(({ name }) => name === user.name);

    if (index !== -1) {
      this.activeUsers.splice(index, 1);
    }
  }

  listUsers(): IUser[] {
    return this.activeUsers;
  }
}
