import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NameComponent } from './name.component';
import { FunctionComponent } from './function.component';
import { NumberService } from './number.service';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    FunctionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
