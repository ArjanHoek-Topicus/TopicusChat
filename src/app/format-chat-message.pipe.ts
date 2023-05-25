import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatChatMessage'
})
export class FormatChatMessagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
