import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/FaceSnap";

@Component({
  selector: 'app-face-bon',
  templateUrl: './face-bon.component.html',
  styleUrls: ['./face-bon.component.scss']
})
export class FaceBonComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor() { }

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
  }

  onAddSnap() {
    this.faceSnap.snaps++;
  }
  onSnap(){
    if (this.buttonText === 'Oh Snap!'){
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!'
    }else{
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }

}
