import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sample-project';

  apiUrl = 'http://localhost:8082/ctrm-api/approval-workflow/api/workflow-config';


  workflowForm = this.fb.group({
    id: [undefined],
    workflowName: [''],
    triggerEvent: [''],
    approvalSpan: [''],
    postAction: [''],
    isSystem: [true],
    isActive: [true],
  });


  constructor(private fb: FormBuilder,private http:HttpClient,private activatedRoute: ActivatedRoute,) {
  }
  ngOnInit(): void {
    this.http.get(`${this.apiUrl}/6`).subscribe(resp=>{
      console.log(resp);
      this.workflowForm.patchValue(resp);
    });
  }

  // {
  //   "id": 0,
  //   "status": "string",
  //   "": "string",
  //   "": "string",
  //   "": "string",
  //   "": "string",
  //   "": true,
  //   "": true,
  //   "workflowSteps": [
  //     {
  //       "role": "string",
  //       "actionName": "string",
  //       "sequence": 0,
  //       "desiredEndStatus": {
  //         "additionalProp1": "string",
  //         "additionalProp2": "string",
  //         "additionalProp3": "string"
  //       },
  //       "mandatory": true,
  //       "sla": "string"
  //     }
  //   ]
  // }

  save() {
    this.http.post(this.apiUrl, this.workflowForm.value).subscribe(resp=>{
      console.log(resp);
    });
  }
}
