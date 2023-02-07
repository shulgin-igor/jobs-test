import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile.interface';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  profiles: Profile[];

  constructor(private readonly profilesService: ProfilesService) {}

  ngOnInit(): void {
    this.profilesService.fetchAll().subscribe((profiles) => {
      this.profiles = profiles;
    });
  }
}
