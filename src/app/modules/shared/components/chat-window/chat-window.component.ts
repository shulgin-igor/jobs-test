import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent implements OnInit {
  messages = [];
  isOpen$: Observable<boolean>;

  form = this.fb.group<{ message: FormControl<string | null> }>({
    message: new FormControl(null, [Validators.required]),
  });

  constructor(
    private readonly chatService: ChatService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.isOpen$ = this.chatService.isChatOpen$.asObservable();
  }

  sendMessage(form: FormGroup) {
    if (form.valid) {
      this.chatService.sendMessage(form.value.message).subscribe(() => {
        this.form.setValue({ message: null });
      });
    }
  }
}
