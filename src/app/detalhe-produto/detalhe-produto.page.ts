import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from './../services/api-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.page.html',
  styleUrls: ['./detalhe-produto.page.scss'],
})
export class DetalheProdutoPage implements OnInit {

  id:string;
  produto:any;

  constructor(private http:HttpClient, public apiServiceService: ApiServiceService, public activatedRoute: ActivatedRoute, public router: Router) {
    this.produto={};
   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("detalhes",this.id);
    this.setProdutoAtual(Number(this.id));
    console.log(this.produto);
  }

  setProdutoAtual(id:number): void {
    this.apiServiceService.setProdutoAtual(id).subscribe(produto => {
      console.log(produto);
      this.produto = produto;
    });
  }
  
  getCarrinho(produto, preco, img){
    this.apiServiceService.addProdutoCarrinho(produto, preco, img).subscribe(result =>{
      this.router.navigate(['/tabs/carrinho'])
    })
    
  }

}
