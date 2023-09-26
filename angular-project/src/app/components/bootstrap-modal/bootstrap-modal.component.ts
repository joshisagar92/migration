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
    
    
  }
  

  displayStyle = "block";
  
  openPopup() {
   
  }
  closePopup() {
    
  }

}
