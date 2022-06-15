import { Component } from "@angular/core";

@Component({
    selector: 'app-stop-training',
    template: `<h1 mat-dialogue-title>Are you sure ?</h1>
    <mat-dialog-actions>
        <button mat-raised-button [mat-dialog-close]="true">Yes</button>
        <button mat-raised-button [mat-dialog-close]="false">No</button>

    </mat-dialog-actions>`
})
export class StopTrainingComponent {}