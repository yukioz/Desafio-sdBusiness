import { PudleComponent } from './views/pudle/pudle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PugComponent } from './views/pug/pug.component';
import { PinscherComponent } from './views/pinscher/pinscher.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "pinscher",
    component: PinscherComponent,
  },
  {
    path: "pug",
    component: PugComponent,
  },
  {
    path: "pudle",
    component: PudleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
