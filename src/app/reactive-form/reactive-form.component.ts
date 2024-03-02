import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  practiceForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.practiceForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

      address: new FormGroup({
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        pincode: new FormControl('', Validators.required)
      }),

      skills: new FormArray([
        new FormControl('angular', Validators.required),
      ]),

      experience: new FormArray([
        new FormControl('angular', [Validators.required]),
      ])

    })

    this.practiceForm.get("name")?.valueChanges.subscribe((res: any) => {
      console.log(res);
    })

    // for all field
    this.practiceForm.valueChanges.subscribe((res: any) => {
      console.log(res);
    })

    // for all status field
    this.practiceForm.statusChanges.subscribe((res: any) => {
      console.log(res);
    })

  }

  ngOnInit(): void { }

  submit() {
    console.log(this.practiceForm)
  }

  // add dynamic skills

  get userFormGroups() {
    return this.practiceForm.get('users') as FormArray
  }

  addSkills() {
    (<FormArray>this.practiceForm.get('skills')).push(
      new FormControl(null, Validators.required)
    )
  }

  deleteSkills(index: number) {
    let controls = (<FormArray>this.practiceForm.get('skills'))
    controls.removeAt(index);
  }

}
