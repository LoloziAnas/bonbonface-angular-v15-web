import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/FaceSnap";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-bon',
  templateUrl: './single-face-bon.component.html',
  styleUrls: ['./single-face-bon.component.scss']
})
export class SingleFaceBonComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  // Inject face snaps service and Router to the construct.
  constructor(private faceSnapsService: FaceSnapsService, private router: Router) { }

  ngOnInit(): void {
  }
  /*Function that navigate by url to view face snap in details*/
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`).then();
  }

  onDeleteFaceSnap() {
    this.faceSnapsService.deleteFaceSnap(this.faceSnap.id);
  }
}
