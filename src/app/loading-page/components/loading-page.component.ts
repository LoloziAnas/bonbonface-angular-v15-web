import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {filter, interval, map, Observable, Subject, takeUntil, tap} from "rxjs";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit, OnDestroy {

  interval$!: Observable<string>;
  destroy$!: Subject<boolean>;
  // Attribute for user form
  userEmail!: string;
  userPhone!: string;
  // Inject router instance into the construct
  constructor(private router: Router) { }

  /*Method that navigate to face snaps list component*/

  onContinue() {
    this.router.navigateByUrl('facesnaps').then();
  }
  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 ===0),
      map(value => value % 2 === 0 ? `I'm ${value} and I'm even`: `I'm ${value} and I'm odd`),
      takeUntil(this.destroy$),
      tap(value => this.logger(value)),
    );
    //this.interval$.subscribe();
  }
  logger(text:string){
    console.log('Log: '+text);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
  // Submit the email to the backend service

  onSubmitForm(userForm:NgForm) {
    console.log(`email: ${userForm.value.userEmail} and phone: ${userForm.value.userPhone}`);
  }
}
