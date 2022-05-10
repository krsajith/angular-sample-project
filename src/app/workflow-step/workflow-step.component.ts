import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { BaseConrolComponent } from '../base-conrol/base-conrol.component';

@Component({
  selector: 'app-workflow-step',
  templateUrl: './workflow-step.component.html',
  styleUrls: ['./workflow-step.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WorkflowStepComponent),
      multi: true
    }
  ]
})
export class WorkflowStepComponent extends BaseConrolComponent implements OnInit {


  stepForm = this.fb.group({
    role: [''],
    actionName: [''],
    sequence: [''],
    postAction: [''],
    mandatory: [true],
    sla: ['']
  });

    //       "": "string",
  //       "": "string",
  //       "": 0,
  //       "desiredEndStatus": {
  //         "additionalProp1": "string",
  //         "additionalProp2": "string",
  //         "additionalProp3": "string"
  //       },
  //       "": true,
  //       "": "string"
  //     }


  writeValue(obj: any): void {
    // throw new Error('Method not implemented.');
  }


  constructor(private fb: FormBuilder) { 
    super()
  }

  ngOnInit(): void {
    const self = this;
    this.stepForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      self.onChange(value);
    });
  }

}
