import { ApiServiceService } from './../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from "@angular/router";


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  nomeCategoria: string;
  listaProdutos:any;
  usuario: string;

  constructor(public apiServiceService: ApiServiceService,public activatedRoute: ActivatedRoute, public router: Router) { 
    this.router.events.subscribe(result => {
      if(result instanceof NavigationEnd){
        this.ngOnInit();
      }
    })
  }

  ngOnInit() {

    this.nomeCategoria = this.activatedRoute.snapshot.paramMap.get('nomeCategoria');
    console.log(`nomeCategoriaProdutosTs: `,this.nomeCategoria);
    this.getListaProdutos(this.nomeCategoria)

  }

  getListaProdutos(nomeCategoria:string){

    this.apiServiceService.getListaProdutos(nomeCategoria)
    .subscribe(
      result => {
      console.log(`getListaProdutos`, result);
      this.listaProdutos = result;  
    });

  }

  getCarrinho(produto, preco, img){
    this.apiServiceService.addProdutoCarrinho(produto, preco, img).subscribe(result =>{
      this.router.navigate(['tabs/carrinho'])
    })
    
  }

}
