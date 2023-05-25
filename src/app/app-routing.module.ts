import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { BeheerPageComponent } from './beheer-page/beheer-page.component';

const routes: Routes = [
  {
    path: 'chat',
    component: ChatPageComponent,
  },
  {
    path: 'beheer',
    component: BeheerPageComponent,
  },
  {
    path: '',
    redirectTo: '/chat',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
