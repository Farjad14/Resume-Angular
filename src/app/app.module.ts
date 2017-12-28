import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatListModule } from '@angular/material';
import { HttpModule, Http } from '@angular/http';
import { 
  MatProgressBarModule, 
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './profile/header/header.component';
import { BodyComponent } from './profile/body/body.component';
import { FooterComponent } from './profile/footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    WelcomeComponent,
    ProfileComponent
  ],
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'profile', component: ProfileComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
