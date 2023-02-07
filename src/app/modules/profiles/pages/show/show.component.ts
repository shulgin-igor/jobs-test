import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/interfaces/profile.interface';
import { ChatService } from 'src/app/modules/shared/services/chat.service';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  profile: Profile;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly profilesService: ProfilesService,
    private readonly chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.profilesService
      .fetchOne(this.route.snapshot.params['profileId'])
      .subscribe((profile) => {
        this.profile = profile;
      });
  }

  openChat() {
    this.chatService.openChat(this.profile.id);
  }
}
