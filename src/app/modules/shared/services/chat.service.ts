import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private profileId: number;
  isChatOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private readonly http: HttpClient) {}

  openChat(profileId: number) {
    this.profileId = profileId;
    this.isChatOpen$.next(true);
  }

  sendMessage(message: string): Observable<any> {
    // TODO: set type
    return this.http.post(`/conversations/${this.profileId}`, { message });
  }

  closeChat() {}
}
