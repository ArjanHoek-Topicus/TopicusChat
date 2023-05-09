import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.scss']
})
export class ChatClientComponent {
  @Input() title = "";
  @Output() messageEvent = new EventEmitter<string>();
  message = "";

  emitMessage() {
    this.messageEvent.emit(this.message);
    this.message = "";
  }
}
