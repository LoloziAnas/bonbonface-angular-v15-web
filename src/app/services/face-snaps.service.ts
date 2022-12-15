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
      snaps: 0
    },
    {
      id: 2,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0
    },
    {
      id: 3,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0
    }
  ];
  /*Function that return all the face snaps from the backend*/
  getAllFaceSnaps():FaceSnap[]{
    return this.faceSnaps;
  }
  /*Method That increment and decriment the number of snap of a specific FaceSnap
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
