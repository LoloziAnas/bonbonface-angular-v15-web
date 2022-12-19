import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../../../core/models/FaceSnap";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-face-bon-list',
  templateUrl: './face-bon-list.component.html',
  styleUrls: ['./face-bon-list.component.scss']
})
export class FaceBonListComponent implements OnInit {

  faceSnaps$!: Observable<FaceSnap[]>;
  constructor(private faceSnapsService: FaceSnapsService) {
  }
  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }

}
