import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new Headers({
      'Accept':  'application/json',
      'Content-Type': 'application/json'
    })
};

@Injectable()
export class EmployeesService {
  constructor(private http: Http) {}

  getEmployees(){
    return this.http.get('http://localhost:3000/api/employes',httpOptions)
      .pipe(map(res =>  res));
  }

  addEmployee(emailUser,nameUser){
    let bodyy = JSON.stringify({
        "nom": nameUser,
        "email": emailUser
    });
    return this.http.post('http://localhost:3000/api/employes',bodyy,httpOptions)
      .pipe(map(res =>  res));
  }

  deleteEmployee(idEmployee){
    return this.http.delete('http://localhost:3000/api/employes/'+idEmployee,httpOptions)
      .pipe(map(res =>  res));
  }
}
