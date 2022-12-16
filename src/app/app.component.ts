import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, interval, map, Observable, Subject, take, takeUntil, tap} from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'BonBonSnap';

  ngOnInit(): void {

  }

}
