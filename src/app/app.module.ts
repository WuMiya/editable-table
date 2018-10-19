import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from './color-picker/color-picker.module';
import { NewtableComponent } from './newtable/newtable.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { HotTableModule } from '@handsontable/angular';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { HomeComponent } from './home/home.component';
import { TableService } from './tableServices/table.service';

@NgModule({
  declarations: [
    AppComponent,
    NewtableComponent,
    FilterPipe,
    EditSectionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ColorPickerModule,
    FormsModule,
    HotTableModule.forRoot()
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
