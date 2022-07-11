import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
 exercises: Exercise[] = []
  constructor(private trainingService : TrainingService, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('availableExercises').valueChanges().subscribe(result =>{
      console.log(result);
    });

  }
  onStartTraining(form: NgForm){
    this.trainingService.startExercise(form.value.exercise);
  }
}
