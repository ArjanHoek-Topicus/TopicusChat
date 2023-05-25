import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { IMessage } from 'src/models/messageInterface';

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.scss'],
})
export class ChatClientComponent implements OnInit, OnDestroy {
  @Input() title = '';
  @Input() isCurrentUser = false;
  @Output() messageEvent = new EventEmitter<IMessage>();
  @Output() removeEvent = new EventEmitter<string>();
  text = '';

  ngOnInit(): void {
    this.notifyServer(`Chat client for ${this.title} was added...`);
  }

  ngOnDestroy(): void {
    this.notifyServer(`Chat client for ${this.title} was removed...`);
  }

  notifyServer(text: string): void {
    console.log(text);
  }

  emitMessage() {
    this.messageEvent.emit({
      clientName: this.title,
      text: this.text,
      timestamp: new Date(),
    });

    this.text = '';
  }

  emitRemove() {
    this.removeEvent.emit(this.title);
  }
}
