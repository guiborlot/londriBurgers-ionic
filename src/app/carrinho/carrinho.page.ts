import { TabsPage } from './../tabs/tabs.page';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../services/api-service.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  usuario:string
  listaCarrinho: any
  precoTotal:any = 0;

  constructor(public apiServiceService: ApiServiceService, public activatedRoute: ActivatedRoute, public router: Router, private tabsPage: TabsPage) {
    this.router.events.subscribe(result => {
      //console.log(result);
      if(result instanceof NavigationEnd){
        this.ngOnInit();
      }
    }) 
  }

  ngOnInit() {
    this.getCarrinho();
    this.tabsPage.itemCounter();     
  }

  getCarrinho(){
    this.precoTotal = 0
    this.apiServiceService.getCarrinho().subscribe(result =>{
      console.log(result)
      this.listaCarrinho = result
      for(let i=0; i<this.listaCarrinho.length; i++){
        this.precoTotal = this.precoTotal + Number(result[i].price.substring(2,result[i].price.length));
      }
      console.log(this.precoTotal)
    })
  }
  
  apagarItem(id){
    this.apiServiceService.apagarProdutoCarrinho(id).subscribe(result =>{
      console.log('Apaguei 1 item do carrinho');
      this.ngOnInit();
    })
  }

  resetCarrinho(){
    console.log(this.listaCarrinho);
    this.listaCarrinho.forEach(element => {
      this.apiServiceService.resetCarrinho(element.id).subscribe(result =>{
        console.log("Resetei listaCarrinho");       
      })
      this.router.navigate(['/tabs/cardapio'])
      console.log(element.id);  
    });
  }

}
