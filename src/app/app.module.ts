import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillEditorModule } from 'ngx-quill-editor';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import {UserService } from './services/user.service.client';
import {LoginComponent} from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { YelpApiTestComponent } from './components/yelp_api_test/yelp.api.test/yelp.api.test.component';
import { YelpApiDetailComponent } from './components/yelp_api_test/yelp.api.detail/yelp.api.detail.component';
import { YelpServiceClient } from './services/yelp.service.client';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    YelpApiTestComponent,
    YelpApiDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    QuillEditorModule
  ],
  // Client Side services here
  providers: [ TestService, UserService, YelpServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }