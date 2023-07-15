import { Component } from '@angular/core';
import { CommonService } from '../common/common.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  myForm!:FormGroup;
  constructor(public commonService:CommonService)
  {
    this.myForm = commonService.myForm;
    this.print();
  }

   print()
   {
     console.log("FORM : ", this.myForm.get('inputFormsService')?.value);
    let el =  document.createElement('input');
     document.getElementById('printForm')?.appendChild(el);

   }

}
