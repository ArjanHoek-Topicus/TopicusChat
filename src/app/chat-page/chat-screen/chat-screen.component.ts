import { Component, Input } from '@angular/core';
import { IMessage } from 'src/models/messageInterface';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss'],
})
export class ChatScreenComponent {
  @Input() messages: IMessage[] = [];
  @Input() currentUser = '';
}
