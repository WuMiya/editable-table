import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from './color-picker/color-picker.module';
import { NewtableComponent } from './newtable/newtable.component';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewtableComponent,
    EditSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ColorPickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
