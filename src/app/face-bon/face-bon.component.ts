import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-bon',
  templateUrl: './face-bon.component.html',
  styleUrls: ['./face-bon.component.scss']
})
export class FaceBonComponent implements OnInit {

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;


  constructor() { }

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'My best friend since childhood!';
    this.createdDate = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = 'Oh Snap!';

  }

  onAddSnap() {
    this.snaps++;
  }
  onSnap(){
    if (this.buttonText === 'Oh Snap!'){
      this.snaps++;
      this.buttonText = 'Oops, unSnap!'
    }else{
      this.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }

}
