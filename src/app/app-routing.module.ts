import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {FormComponent} from "./components/form/form.component";
import {FillFormComponent} from "./pages/fill-form/fill-form.component";

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'forms', component: MainComponent},
  {path:'forms/:formName', component: FillFormComponent},
  {path:'add', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
