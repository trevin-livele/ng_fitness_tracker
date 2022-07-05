import { Subject } from "rxjs";
import { Exercise } from "./exercise.model";

export class TrainingService {
    exerciseChanged = new Subject<Exercise>();
    private availableExercises: Exercise[] = [
        {id : 'crunches', name: 'Crunches', duration: 30, calories: 8},
        {id : 'push-ups', name: 'push-ups', duration: 60, calories: 18},
        {id : 'plank', name: 'plank', duration: 90, calories: 28},
        {id : 'burpees', name: 'burpees', duration: 1200, calories: 8},

    ];

    private runningExercise: Exercise | any;


    getAvailableExercises(){
        return this.availableExercises.slice();
    }

    startExercise(selectedId: string){
        this.runningExercise = this.availableExercises.find(
            ex => ex.id === selectedId);
            this.exerciseChanged.next({...this.runningExercise})
         
    }

    getRunningExercise(){
        return {...this.runningExercise };
    }
}