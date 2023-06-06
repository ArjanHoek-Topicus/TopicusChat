import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { IMessage } from 'src/models/messageInterface';
import { IUser } from 'src/models/userInterface';

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.scss'],
})
export class ChatClientComponent implements OnInit, OnDestroy {
  @Input() user!: IUser;
  @Input() isCurrentUser = false;
  @Output() messageEvent = new EventEmitter<IMessage>();
  @Output() removeEvent = new EventEmitter<IUser>();
  text = '';

  ngOnInit(): void {
    this.notifyServer(`Chat client for ${this.user.name} was added...`);
  }

  ngOnDestroy(): void {
    this.notifyServer(`Chat client for ${this.user.name} was removed...`);
  }

  notifyServer(text: string): void {
    console.log(text);
  }

  emitMessage() {
    this.messageEvent.emit({
      user: {
        name: this.user.name,
        active: true,
      },
      text: this.text,
      timestamp: new Date(),
    });

    this.text = '';
  }

  emitRemove() {
    this.removeEvent.emit(this.user);
  }
}
