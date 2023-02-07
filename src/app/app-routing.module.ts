import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './modules/profiles/pages/list/list.component';
import { ShowComponent } from './modules/profiles/pages/show/show.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'profile/:profileId',
    component: ShowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
