import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  myForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) {
     this.myForm = formBuilder.group({
      inputFormsService: formBuilder.array([

        ])
     })
   }

   get inputFormsService()
   {
    return this.myForm.get('inputFormsService') as FormArray;
   }

   addInMyForm(inputForm:FormGroup)
   {
       let a = this.formBuilder.group({
        type: inputForm.get('type')?.value,
        label: inputForm.get('label')?.value,
        name:inputForm.get('name')?.value,
        value:inputForm.get('value')?.value
      });
      this.inputFormsService.push(a);
      console.log("Service : ", this.myForm.get('inputFormsService')?.value);

   }
}
