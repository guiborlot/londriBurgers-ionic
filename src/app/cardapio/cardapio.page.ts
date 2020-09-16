import { ApiServiceService } from './../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {

  listaCategorias: any;
  nomeCategoria="";
  listaProdutos: any[];

  constructor(private http:HttpClient,private apiServiceService: ApiServiceService) {}

  ngOnInit() {
    this.getListaCategorias();
  }
  
  getListaCategorias(){
    this.apiServiceService.getListaCategorias()
    .subscribe(result=> {
      console.log(`getListaCategorias: `, result)
      this.listaCategorias = result;
    })
  }  
}

