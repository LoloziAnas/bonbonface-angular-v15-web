import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FaceSnapsService} from "../services/face-snaps.service";
import {map, Observable, tap} from "rxjs";
import {FaceSnap} from "../models/FaceSnap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-face-bon',
  templateUrl: './new-face-bon.component.html',
  styleUrls: ['./new-face-bon.component.scss']
})
export class NewFaceBonComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  constructor(private faceSnapsService: FaceSnapsService ,private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Build a reactive form with a specific attributes (title, description, imageUrl, location).
    this.snapForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null,  [Validators.required]],
      imageUrl: [null,  [Validators.required]],
      location: [null,  [Validators.required]]
    }, {updateOn: 'blur'});

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({...formValue, createdDate: new Date, id: 0}))
    );

  }
  /**/
  onSubmitForm(){
    this.faceSnapsService.addNewFaceSnap(this.snapForm.value).pipe(
      tap(()=> this.router.navigateByUrl('/facesnaps'))
    ).subscribe();

  }

}
