import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports :  [MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,FlexLayoutModule ],
    exports : [MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,FlexLayoutModule ]
})
export class MaterialModule {

}