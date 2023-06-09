import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatScreenComponent } from './chat-page/chat-screen/chat-screen.component';
import { ChatClientComponent } from './chat-page/chat-client/chat-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyledButtonDirective } from '../directives/styled-button.directive';
import { BeheerPageComponent } from './beheer-page/beheer-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { StyledNavigationLinkDirective } from 'src/directives/styled-navigation-link/styled-navigation-link.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ChatScreenComponent,
    ChatClientComponent,
    StyledButtonDirective,
    BeheerPageComponent,
    ChatPageComponent,
    StyledNavigationLinkDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
