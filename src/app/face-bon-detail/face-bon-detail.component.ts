import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/FaceSnap";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-face-bon-detail',
  templateUrl: './face-bon-detail.component.html',
  styleUrls: ['./face-bon-detail.component.scss']
})
export class FaceBonDetailComponent implements OnInit {

  faceSnap!: FaceSnap;
  buttonText!: string;
  /*Class construct to inject the FaceSnapService and ActivatedRoute
  * @params{faceSnapsService}: instance of FaceSnapsService object
  * @params{ActivatedRoute}: instance of ActivateRoute
  * */
  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Initialize buttonText with 'Oh Snap!'.
    this.buttonText = 'Oh Snap!';
    // Return the faceSnap identifier from the activated route.
    const faceSnapId = +this.route.snapshot.params['id'];
    // Return the faceSnap object from the backend using the service.
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
