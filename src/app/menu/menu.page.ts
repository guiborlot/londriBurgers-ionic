import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../services/api-service.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  listaCarrinho : any;
  listaProdutos : any;
  nomeCategoria = "hamburguers"

  constructor(public apiServiceService: ApiServiceService, public router: Router) { 
  }

  ngOnInit() {
    this.getListaProdutos(this.nomeCategoria);
  }
 
  resetCarrinho(){
    let listaCarrinho;
    this.apiServiceService.getCarrinho().subscribe(result =>{
      listaCarrinho = result;
      console.log(listaCarrinho);
        listaCarrinho.forEach(element => {
          this.apiServiceService.resetCarrinho(element.id).subscribe(result =>{
            console.log("Resetei listaCarrinho");       
          })
          console.log(element.id);  
        });
    });
  }

  getListaProdutos(nomeCategoria:string){

    this.apiServiceService.getListaProdutos(nomeCategoria)
    .subscribe(
      result => {
      console.log(`getListaProdutos`, result);
      this.listaProdutos = result;  
    });

  }

}
