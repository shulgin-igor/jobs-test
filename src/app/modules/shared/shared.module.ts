import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatWindowComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ChatWindowComponent],
})
export class SharedModule {}
