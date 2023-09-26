import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  observer = new Subject();
  public subscriber$ = this.observer.asObservable();


  constructor() { }

  openModel(){
    console.log("openlog called....")
    this.observer.next("open");
  }

}
