import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-face-bon',
  templateUrl: './new-face-bon.component.html',
  styleUrls: ['./new-face-bon.component.scss']
})
export class NewFaceBonComponent implements OnInit {

  snapForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title: [null], description: [null], imageUrl: [null], location: [null]
    });
  }
  onSubmitForm(){
    console.log(this.snapForm.value);
  }

}
