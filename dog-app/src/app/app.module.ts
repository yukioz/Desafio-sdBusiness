import { SharedModules } from './shared/shared-modules.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { PinscherComponent } from './views/pinscher/pinscher.component';
import { PugComponent } from './views/pug/pug.component';
import { PudleComponent } from './views/pudle/pudle.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    HomeComponent,
    PinscherComponent,
    PugComponent,
    PudleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
