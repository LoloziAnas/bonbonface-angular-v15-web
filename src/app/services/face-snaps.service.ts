import { Injectable } from '@angular/core';
import {FaceSnap} from "../models/FaceSnap";
import {map, Observable, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  /*Function that add a new FaceSnaps Object to the array*/
  addNewFaceSnap(faceSnapForm: {title:string, description: string, imageUrl: string, location?:string}){
    /*const faceSnap = {
      ...faceSnapForm,
      createdDate: new Date(),
      snaps:0,
      //id: this.faceSnaps[this.faceSnaps.length-1].id + 1
    }*/
    // this.http.post('http://localhost:3000/facesnaps', faceSnap);

    console.log(`face snap form ${faceSnapForm.description}`);

    return this.getAllFaceSnaps().pipe(
      map(faceSnap => [...faceSnap].sort((a, b) => a.id - b.id)),
      map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
      map(previousFaceSnap => ({...faceSnapForm, snaps: 0, createdDate: new Date(), id: previousFaceSnap.id + 1
      })),
      switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps/', newFaceSnap ))
    );
    //this.faceSnaps.push(faceSnap);
  }
  constructor(private http:HttpClient) {
  }
  /*Function that return all the face snaps from the backend*/
  getAllFaceSnaps():Observable<FaceSnap[]>{
    //return this.faceSnaps;
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }
  /*Function that return a specific faceSnap based on a given id
  * @params{faceSnapId}: face snap identifier.
  * @return a faceSnap object
  * */
  getFaceSnapById(faceSnapId: number): Observable<FaceSnap>{
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }
  /*Method That increment and decrement the number of snap of a specific FaceSnap
  * @params{faceSnapId}: identifier of face snap
  * @params{snapType}: indicate the type on operation
  * */
  snapFaceSnapById(faceSnapId: number, snapType:'snap' |'unsnap'): Observable<FaceSnap>{
    // Return the faceSnap object from the array by using find function
    return  this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap =>({...faceSnap, snaps: faceSnap.snaps+(snapType === 'snap' ? 1: -1)}) ),
      switchMap(updatedFaceSnap =>
        this.http.put<FaceSnap>(`https://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap)
      )
    );

  }
  deleteFaceSnap(faceSnapId: number):Observable<FaceSnap>{
    return this.http.delete<FaceSnap>(`https://localhost:3000/facesnaps/${faceSnapId}`);
  }
}
