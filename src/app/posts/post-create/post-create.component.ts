import { Component } from '@angular/core';
import { Post } from '../post.model';
import { EmployeesService } from '../../shared/employees.service';

@Component({
  styleUrls: ['./post-create.component.css'],
  templateUrl : './post-create.component.html',
  selector : 'app-post-create'
})
export class PostCreateComponent {
  inputTitle = '';
  inputContent = '';
  constructor(private employeesService : EmployeesService) {}

  addEmployee() {
    const post: Post = {
      name : this.inputTitle,
      email : this.inputContent
    };
    this.employeesService.addEmployee(post.name,post.email).subscribe(
      (res)=>{
          console.log(res);
          window.alert("Employé ajouté avec succès!");
          location.reload();
      } ,
      (error) => {
        console.log(error);
      }
    );
  }

}
