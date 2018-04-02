import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../model/model.contact';
import 'rxjs/add/operator/map';

@Injectable()
export class CoinService {

  result: any;
  
  
  constructor(public http: HttpClient) {}

  saveContact(contact:Contact) {
    
    const uri = 'http://localhost:8080/contacts';
    debugger
    return this
      .http
      .post(uri, contact)
      .map(res => {
        console.log('Done');
        return res;
      });
  }

  getContacts() {
    const uri = 'http://localhost:8080/contacts';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  getContactsByCreteres(motCle:string,page:number,size:number) {
    const uri = 'http://localhost:8080/chercherContacts?mc='+motCle+'&size='+size+'&page='+page'';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editContact(id) {
    const uri = 'http://localhost:8080/contacts/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateContact(contact:Contact) {
    return this
      .http
      .put("http://localhost:8080/contacts/"+contact.id, contact)
      .map(res => {
        console.log('Done');
        return res;
      });
  }

  deleteContact(id) {
    const uri = 'http://localhost:8080/contacts/' + id;

        return this
            .http
            .delete(uri)
            .map(res => {
              return res;
            });
  }
}


  

  