import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../models/FaceSnap";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-bon-list',
  templateUrl: './face-bon-list.component.html',
  styleUrls: ['./face-bon-list.component.scss']
})
export class FaceBonListComponent implements OnInit {

  faceSnaps!: FaceSnap[];
  constructor(private faceSnapsService: FaceSnapsService) {
  }
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  }

}
