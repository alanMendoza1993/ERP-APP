import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/models/users';
import { RUTA } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  selectedUser: Users;
  users: Users[];

  readonly URL_API = RUTA+"users";

  constructor(private http: HttpClient) { 
    this.selectedUser = new Users();
  }
  getUsers(){
    return this.http.get(this.URL_API);
  }

  getUser(id: String){
    return this.http.get(this.URL_API + "/" + id);
  }

  postUser(users: Users){
    return this.http.post(this.URL_API, users);
  }

  putUser(user: Users){
    return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  putCredit(id: String, credit: String){
    return this.http.put(this.URL_API + "/credit" +`/${id}` + "." +`${credit}`,'');
  }

  deleteUser(_id: String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
 signin(users: Users){
    return this.http.post(this.URL_API+"/signin", users);
  } 
}
