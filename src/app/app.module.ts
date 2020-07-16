import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './Services/data.service';
import { EmaildataPipe } from './Custom-pipe/emaildata.pipe';
import { ChildComponantComponent } from './child-componant/child-componant.component';

@NgModule({
  declarations: [
    AppComponent,
    EmaildataPipe,
    ChildComponantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
