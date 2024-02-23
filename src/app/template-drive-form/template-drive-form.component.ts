import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-drive-form',
  templateUrl: './template-drive-form.component.html',
  styleUrls: ['./template-drive-form.component.scss']
})
export class TemplateDriveFormComponent {

  @ViewChild("templateForm") templateForm!: NgForm;

  constructor(){

  }
  
  submit(){
    console.log(this.templateForm);
    // this.templateForm.reset();
  }

  genders = [
    {id:'check-male',value:'male',display:'Male'},
    {id:'check-female',value:'female',display:'Female'},
    {id:'check-other',value:'other',display:'other'}
  ]
}
