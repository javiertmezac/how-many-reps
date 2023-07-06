import { Component, OnInit } from '@angular/core';
import { WorkoutHistory } from '../workout/workout-history.model';
import { Workout } from '../workout/workout.model';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.css']
})
export class WorkoutHistoryComponent implements OnInit {
  workouts: Workout[] = [];
  workoutHistory: WorkoutHistory[] = [];

  constructor() { }

  ngOnInit(): void {
    const cachedWorkouts = localStorage.getItem('workouts-history');
    if (cachedWorkouts) {
      this.workoutHistory = JSON.parse(cachedWorkouts);
    }

    var actualDate = new Date();
    var result = this.workoutHistory.find(item => new Date(item.date).toLocaleDateString() === actualDate.toLocaleDateString())

    if (result === undefined) {
      this.updateHistory();
    }

  }

  private saveHistoryToCache() {
    localStorage.setItem('workouts-history', JSON.stringify(this.workoutHistory));
  }


  private readWorkoutsFromCache() {
    const cachedWorkouts = localStorage.getItem('workouts');
    if (cachedWorkouts) {
      this.workouts = JSON.parse(cachedWorkouts);
    }
  }
  private clearCacheForWorkouts() {
    localStorage.removeItem('workouts');
  }

  updateHistory() {
    this.readWorkoutsFromCache();
    if (this.workouts.length > 0) {
      var actualDate = new Date();
      this.workoutHistory.push({
        date: actualDate,
        workouts: this.workouts
      });
      this.saveHistoryToCache();
      this.clearCacheForWorkouts();
    }

  }

}
