import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../shared/employees.service';
import { Response } from '@angular/http';
import { Post } from '../post.model';

@Component({
  styleUrls : ['./post-list.component.css'],
  selector : 'app-post-list',
  templateUrl : './post-list.component.html'
})
export class PostListComponent implements OnInit {

  lesEmployes : [{
    nom : string,
    email : string,
    id : string
  }]

  constructor(public employeesService: EmployeesService) {
    this.getEmployees();
  }

  ngOnInit() {}

  getEmployees(){
   this.employeesService.getEmployees().subscribe(
    (data : Response) => {
      this.lesEmployes = JSON.parse(data.text());
     for (var x=0;x<this.lesEmployes.length;x++){
     console.log(this.lesEmployes[x].nom);
    }
   },
    (error)=>{console.log(error)
     console.log('not found!');
      }
    );
  }

  deleteEmployee(){
    var inputElement = <HTMLInputElement>document.querySelector('button[name="deletebtn"]');
    var selectedid = inputElement.value;
    this.employeesService.deleteEmployee(selectedid).subscribe(
      (data : Response) => {
       window.alert("supprimé avec succès!");
       location.reload();
      },
      (error)=>{console.log(error)
       console.log('not found!');
      }
      );
  }

}
