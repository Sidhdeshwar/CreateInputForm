import { Component } from '@angular/core';
import { CommonService } from '../common/common.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  oneForm!:FormGroup;

  constructor(private  commonService: CommonService, private formBuilder: FormBuilder)
  {
     this.oneForm = formBuilder.group({
       type: [''],
       label: [''],
       name: [''],
       value:['']
     })

  }


  addInCommonService()
  {
    this.commonService.addInMyForm(this.oneForm);
    this.oneForm.reset();
  }
}
