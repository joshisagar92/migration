import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ModalService {

  //private componentMethodCallSource = new Subject<any>();
  //componentMethodCalled$ = this.componentMethodCallSource.asObservable();


  constructor() { }

  openModel(){
    console.log("openlog called....")
    //this.componentMethodCallSource.next("hello");
  }

}
