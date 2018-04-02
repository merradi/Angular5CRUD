import { CoinService } from './../../coin.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Coin } from '../../Coin';
import { Contact } from '../../../model/model.contact';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  contacts: any;
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;

  constructor(private http: HttpClient, private service: CoinService) {}

  ngOnInit() {
    console.log("Initialisation ....");
    this.getContacts();
  }

  //getContactsByCreteresearchs(motCle,page,size) {
  //  this.service.getContactsByCreteres(this.motCle,this.page,this.size).subscribe(res => {
  //    this.contacts = res;
  //  });
  //}
  getContacts() {
    this.service.getContacts().subscribe(res => {
      this.contacts = res;
    });
  }

  search(){
    this.service.getContactsByCreteres(this.motCle,this.currentPage,this.size).subscribe(res => {
      this.contacts = res;
      this.pages=new Array(res.totalPages);
    });
  }

  
  gotoPage(i:number) {
    this.currentPage=i;
    this.search();
  }
  deleteContact(c:Contact) {
    let confirm=window.confirm('Est vous sure?');
    if(confirm==true){
      this.service.deleteContact(c.id).subscribe(res => {
        console.log('Deleted');
        this.contacts.content.splice(
          this.contacts.content.indexOf(c),1
        );
      });
    }
    
  }
}
