import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './components/projects/projects.component';
import { ImageHeaderComponent } from './components/image-header/image-header.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoAmIComponent,
    ProjectsComponent,
    ImageHeaderComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
