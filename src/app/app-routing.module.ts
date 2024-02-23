import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDriveFormComponent } from './template-drive-form/template-drive-form.component';

const routes: Routes = [
  {path:"template",component:TemplateDriveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
