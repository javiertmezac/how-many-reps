import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { RepsComponent } from './reps/reps.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "about", component: AboutComponent },
      { path: "", component: RepsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
