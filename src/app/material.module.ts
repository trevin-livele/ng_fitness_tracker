import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports :  [MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule ],
    exports : [MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule ]
})
export class MaterialModule {

}