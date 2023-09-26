import { Component } from '@angular/core';
import { ModalService } from 'src/app/service/modal-service.service';

@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.css']
})
export class BootstrapModalComponent {

  modelService : ModalService
  constructor(modelService : ModalService) {
    this.modelService = modelService;
  }
  
  ngOnInit() {
    
    this.modelService.subscriber$.subscribe(data => {
        let element = document.getElementById("studentListViewModal");
        //@ts-ignore
        element.style.display = "block";
    });
  }
  

  students : any[] = [
    {name: 'Mark Waugh', city:'New York'},
    {name: 'Steve Jonathan', city:'London'},
    {name: 'John Marcus', city:'Paris'}
];

editMode:Boolean = false;
current_index:Number = -1;

editStudent (index : Number){
    console.log("Inside Edit"+ index)
    this.editMode = true;
    this.current_index = index;
}

deleteStudent(){

}

saveEdit(){
    this.editMode = false;
    this.current_index = -1;
}


  displayStyle = "block";
  
  openPopup() {
    let element = document.getElementById("studentListViewModal");
    //@ts-ignore
    element.style.display = "block";
  }
  closePopup() {
    let element = document.getElementById("studentListViewModal");
        //@ts-ignore
        element.style.display = "none";
  }

}
