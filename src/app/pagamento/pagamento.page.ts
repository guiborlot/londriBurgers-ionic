import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  precoTotal = 0;
  precoTotalInicial = 0;
  typeOfPayment;
  nomeProduto;
  price;
  img;
  listaCarrinho;
  listaPedidos;
  codigo;
  erroCupom;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private apiServiceService: ApiServiceService) { }

  ngOnInit() {
    this.getCarrinho();
    this.getPrecoTotal();
    this.getListaPedido();
  }

  getCarrinho() {
    this.apiServiceService.getCarrinho().subscribe(result => {
      this.listaCarrinho = result;
      let nomeProduto = [];
      let price = [];
      let img = [];
      this.listaCarrinho.forEach(function (object, index) {
        nomeProduto.push(object.nomeProduto);
        price.push(object.price);
        img.push(object.img);

      });
      this.nomeProduto = nomeProduto;
      this.price = price;
      this.img = img;
      // console.log(this.nomeProduto);
      // console.log(this.price);
      // console.log(this.img);
    })

  }

  getPrecoTotal() {
    this.apiServiceService.getCarrinho().subscribe(result => {
      for (let i = 0; i < result.length; i++) {
        this.precoTotal = this.precoTotal + Number(result[i].price.substring(2, result[i].price.length));
      }
      this.precoTotalInicial = this.precoTotal;
      console.log(this.precoTotal)
    })
  }

  aplicarDesconto() {
    console.log("apertei o botao de aplicar desconto")
    if (this.codigo > "") {
      this.apiServiceService.aplicarDesconto(this.codigo).subscribe(result => {
        console.log(result)
        if (this.precoTotal == this.precoTotalInicial) {
          this.precoTotal = this.precoTotal - (this.precoTotal * Number("0." + result[0].price))
        }
      })
    } else {
      this.erroCupom = "Codigo de cupom não encontrado"
    }
  }

  typeOfPay(value) {
    this.typeOfPayment = value.detail.value;
    console.log("Opção de pagamento selecionada: ", this.typeOfPayment);
    return this.typeOfPayment;
  }

  goToPage() {
    if (this.typeOfPayment === 'credito') {
      this.router.navigate(['/pagamentocartao', this.typeOfPayment])
      return this.typeOfPayment;
    }
    if (this.typeOfPayment === 'debito') {
      this.router.navigate(['/pagamentocartao', this.typeOfPayment])
      console.log("Agr foi");
      return this.typeOfPayment;
    }
    if (this.typeOfPayment === 'caixa') {
      this.router.navigate(['/pagamentocaixa', this.typeOfPayment])
      console.log("Agr foi");
      return this.typeOfPayment;
    }

  }

  postPedido() {
    this.apiServiceService.postPedido(this.nomeProduto, this.price, this.img).subscribe(result => {
      //console.log("Chamei postPedido()");
    });
  }

  getListaPedido() {
    this.apiServiceService.getListaPedido().subscribe(result => {
      this.listaPedidos = result;
      console.log('listaPedidos:', this.listaPedidos);
    })
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

}
