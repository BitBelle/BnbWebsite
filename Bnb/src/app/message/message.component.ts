import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() customMessage: string | null = null;
  @Input() type: 'success' | 'error' = 'success';

  clearMessage() {
    this.customMessage = null;
  }

}
