import { Component, OnDestroy, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';
import { Observable,Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
 exercises!: Exercise[];
  private exerciseSubscription!: Subscription;
  private loadingSubscription!: Subscription;
  isLoading!: boolean;

  constructor(private trainingService : TrainingService,private uiService : UIService) { }

  ngOnInit(): void {
    this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });

    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(
      exercises =>{
        this.exercises = exercises;
      } 
        );
        this.fetchExercises();
    };




    fetchExercises(){
      this.trainingService.fetchAvailableExercises();
    }

  
  onStartTraining(form: NgForm){
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy(): void {
    this.exerciseSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe(); 
  }
}

