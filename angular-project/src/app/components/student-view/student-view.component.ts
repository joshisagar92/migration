import { Component } from '@angular/core';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent {

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

}
