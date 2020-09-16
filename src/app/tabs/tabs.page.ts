import { ApiServiceService } from './../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  listaCarrinho : any;
  badgeCounter : number;

  constructor(private apiService: ApiServiceService, private router: Router) { 
    this.router.events.subscribe(result => {
      if(result instanceof NavigationEnd){
        this.ngOnInit();
      }
    })
  }

  ngOnInit() {
    this.itemCounter();
  }

  itemCounter(){
    this.apiService.getCarrinho().subscribe(result => {
      this.listaCarrinho = result;
      this.badgeCounter = 0;
      this.listaCarrinho.forEach(element => {
        if(element.id > ""){
          console.log(element.id);
          this.badgeCounter++;        
        }  
      });
      console.log('getCarrinho: ',this.listaCarrinho);
      console.log('Itens no carrinho: ',this.badgeCounter); 

    })
  } 


}
