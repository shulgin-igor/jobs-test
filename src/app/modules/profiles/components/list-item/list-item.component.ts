import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() profile: Profile;
}
