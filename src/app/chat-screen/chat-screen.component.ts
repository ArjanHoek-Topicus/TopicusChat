import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss']
})
export class ChatScreenComponent {
  @Input() messages: string[] = [];

}
