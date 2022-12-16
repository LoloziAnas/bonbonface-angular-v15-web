import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {

  // Inject router instance into the construct
  constructor(private router: Router) { }

  /*Method that navigate to face snaps list component*/
  onContinue() {
    this.router.navigateByUrl('facesnaps').then();
  }

  ngOnInit(): void {
  }
}
