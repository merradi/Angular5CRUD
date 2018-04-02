import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  constructor(public contactService: CoinService) {
  }

  ngOnInit() {
  }

  onSaveContact(dataForm){
    this.contactService.saveContact(dataForm).subscribe(res => {
      console.log(res); 
    });
  }
}
