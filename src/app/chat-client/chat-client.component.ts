import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMessage } from 'src/models/messageInterface';

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.scss'],
})
export class ChatClientComponent {
  @Input() title = '';
  @Input() isCurrentUser = false;
  @Output() messageEvent = new EventEmitter<IMessage>();
  text = '';

  emitMessage() {
    this.messageEvent.emit({
      clientName: this.title,
      text: this.text,
      timestamp: new Date(),
    });

    this.text = '';
  }
}
