import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MainComponent } from './pages/main/main.component';
import { FormComponent } from './components/form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FillFormComponent } from './pages/fill-form/fill-form.component';
import { FilterFormsPipe } from './pipes/filter-forms.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MainComponent,
    FormComponent,
    FillFormComponent,
    FilterFormsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
