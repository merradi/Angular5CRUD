import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Contact } from '../../../model/model.contact';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add contact';
  mode:number=1;
  contact:Contact=new Contact();
  
  constructor(public contactService: CoinService) {
  }
  
  
   ngOnInit() {
  }

  saveContact(){
    this.contactService.saveContact(this.contact).subscribe(res => {
      console.log(res); 
      this.mode=2;
    });
     
  }
    

}

  
  
  