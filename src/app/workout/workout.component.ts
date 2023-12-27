import { Component, OnInit } from '@angular/core';
import { Workout } from './workout.model';
import { WorkoutHistory } from './workout-history.model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  workouts: Workout[] = [
    { name: "Push-ups", repetitions: 0 },
    { name: "Pull-ups", repetitions: 0 },
    { name: "Squats", repetitions: 0 },
    { name: "Sit-ups", repetitions: 0 }
  ];

  newWorkout: Workout = { name: '', repetitions: 0 }

  ngOnInit() {
    const cachedWorkouts = localStorage.getItem('workouts');
    if(cachedWorkouts) {
      this.workouts = JSON.parse(cachedWorkouts);
    }
  }

  private saveWorkoutsToCache() {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  addWorkout() {
    if (this.newWorkout.name && this.newWorkout.repetitions > 0) {
      this.workouts.push({ ...this.newWorkout });
      this.saveWorkoutsToCache();
      this.newWorkout = { name: '', repetitions: 0 };
    }
  }

  increaseRepetitions(workout: Workout) {
    workout.repetitions++;
    this.saveWorkoutsToCache();
  }

  decreaseRepetitions(workout: Workout) {
    if (workout.repetitions > 0) {
      workout.repetitions--;
      this.saveWorkoutsToCache();
    }
  }

  removeWorkout(workout: Workout) {
    const index = this.workouts.indexOf(workout);
    if (index !== -1) {
      this.workouts.splice(index, 1);
      this.saveWorkoutsToCache();
    }
  }

}
