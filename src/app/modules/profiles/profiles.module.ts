import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { ShowComponent } from './pages/show/show.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [ListComponent, ShowComponent, ListItemComponent],
  imports: [CommonModule, RouterModule],
})
export class ProfilesModule {}
