import { Injectable } from '@angular/core';
import { createNames } from 'src/mock';

const mockUsers = createNames(20);

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public activeUsers: string[];

  constructor() {
    const [user1, user2] = mockUsers;

    this.activeUsers = [user1, user2];
  }

  addUserToChat(name: string) {
    if (!this.activeUsers.includes(name)) {
      this.activeUsers.push(name);
    }
  }

  removeUserFromChat(name: string) {
    const index = this.activeUsers.indexOf(name);
    if (index !== -1) {
      this.activeUsers.splice(index, 1);
    }
  }

  listUsers(): string[] {
    return this.activeUsers;
  }
}
