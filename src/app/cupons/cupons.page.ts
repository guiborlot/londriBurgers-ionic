import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../services/api-service.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {

  listaCupons:any;


  constructor(private hppt:HttpClient, public apiServiceService: ApiServiceService, private router : Router) {
    this.router.events.subscribe(result => {
      if(result instanceof NavigationEnd){
        this.ngOnInit();
      }
    })
   }

  ngOnInit() {
    this.getListaCupons()
  }

  getListaCupons(){
    this.apiServiceService.getListaCupons()
    .subscribe(result => {
      console.log("getListaCupons: ",result);
      this.listaCupons = result;
    })
  }

}
