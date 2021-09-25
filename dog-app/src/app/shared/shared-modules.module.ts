import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material imports
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatToolbarModule,
  ]
})
export class SharedModules { }
