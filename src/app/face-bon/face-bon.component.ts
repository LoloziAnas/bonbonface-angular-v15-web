import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/FaceSnap";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-bon',
  templateUrl: './face-bon.component.html',
  styleUrls: ['./face-bon.component.scss']
})
export class FaceBonComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
  }

  onAddSnap() {
    this.faceSnap.snaps++;
  }
  onSnap(){
    if (this.buttonText === 'Oh Snap!'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!'
    }else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }

}
