import { Component } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  errMessage: string;
  note: Note =new Note();
  notes : Array<Note> =[];
constructor(private noteService:NotesService){

}
ngOnInit(){
  this.noteService.getNotes().subscribe(
    data=>{
      if(data){
        console.log(data);
        this.notes=data;
      }
      else{
        this.errMessage= 'Title and Text both are required fields';
      }
    },
    error=>{
      this.errMessage='Http failure response for http://localhost:3000/notes: 404 Not Found';
    }
      )
}
addNote(){
  if(!this.note.title || !this.note.text){
    this.errMessage= 'Title and Text both are required fields';
    return;
  }
  // console.log(this.note);
  this.noteService.addNote(this.note).subscribe(
    data=>{
      if(data){
        this.notes.push(data);
      }
      else{
        this.errMessage= 'Title and Text both are required fields';
      }
    },
    error=>{
console.log(error)
this.errMessage='Http failure response for http://localhost:3000/notes: 404 Not Found';
    }
  )
  
  this.note=new Note();

}
}
