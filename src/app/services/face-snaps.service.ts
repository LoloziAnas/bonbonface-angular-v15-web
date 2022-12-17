import { Injectable } from '@angular/core';
import {FaceSnap} from "../models/FaceSnap";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'My best dude since childhood.',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 58
    },
    {
      id: 2,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 1000
    },
    {
      id: 3,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 98
    }
  ];
  /*Function that add a new FaceSnaps Object to the array*/
  addNewFaceSnap(faceSnapForm: {title:string, description: string, imageUrl: string, location?:string}){
    const faceSnap = {
      ...faceSnapForm,
      createdDate: new Date(),
      snaps:0,
      id: this.faceSnaps[this.faceSnaps.length-1].id + 1
    }
    this.faceSnaps.push(faceSnap);
  }
  /*Function that return all the face snaps from the backend*/
  getAllFaceSnaps():FaceSnap[]{
    return this.faceSnaps;
  }
  /*Function that return a specific faceSnap based on a given id
  * @params{faceSnapId}: face snap identifier.
  * @return a faceSnap object
  * */
  getFaceSnapById(faceSnapId: number): FaceSnap{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId );
    if (faceSnap) return faceSnap;
    else throw new Error('FaceSnap not found !!');
  }
  /*Method That increment and decrement the number of snap of a specific FaceSnap
  * @params{faceSnapId}: identifier of face snap
  * @params{snapType}: indicate the type on operation
  * */
  snapFaceSnapById(faceSnapId: number, snapType:'snap' |'unsnap'): void{
    // Return the faceSnap object from the array by using find function
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId );
    // Increment the number of snaps if the snapType is snap
    if(faceSnap) snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    // Throw an error if the faceSnap doesn't exist
    else throw new Error('face snap not found !!');
  }
}
