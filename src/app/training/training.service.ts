import { Exercise } from "./exercise.model";

export class TrainingService {
    private availableExercises: Exercise[] = [
        {id : 'crunches', name: 'Crunches', duration: 30, calories: 8},
        {id : 'push-ups', name: 'push-ups', duration: 60, calories: 18},
        {id : 'plank', name: 'plank', duration: 90, calories: 28},
        {id : 'burpees', name: 'burpees', duration: 1200, calories: 8},

    ];

    getAvailableExercises(){
        return this.availableExercises.slice();
    }
}