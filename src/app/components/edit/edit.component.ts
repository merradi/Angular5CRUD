import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinService } from './../../coin.service';
import { Contact } from '../../../model/model.contact';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  coin: any;
  id: number;
  title = 'Edit contact';
  contact:Contact;
  
  constructor(private route: ActivatedRoute, private router: Router, private service: CoinService) {
   console.log(route.params);
   }

  updateContact() {
    this.service.updateContact(this.coin)
    .subscribe(res => {
     alert("Mise à jour effectue");
    });
    this.router.navigate(['index']);
   
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.coin = this.service.editContact(params['id']).subscribe(res => {
        this.coin = res;
      });
    });
  }
}
