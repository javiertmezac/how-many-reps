import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { WorkoutComponent } from './workout/workout.component';
import { FormsModule } from '@angular/forms';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, WorkoutComponent, WorkoutHistoryComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'workouts', component: WorkoutComponent },
      { path: 'workouts-history', component: WorkoutHistoryComponent },
      { path: '', component: WorkoutComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
