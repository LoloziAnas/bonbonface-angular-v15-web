import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/FaceSnap";
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-bon',
  templateUrl: './face-bon.component.html',
  styleUrls: ['./face-bon.component.scss']
})
export class FaceBonComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  // Inject face snaps service and Router to the construct.
  constructor(private faceSnapsService: FaceSnapsService, private router: Router) { }

  ngOnInit(): void {
  }
  /*Function that navigate by url to view face snap in details*/
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`).then();
  }
}
