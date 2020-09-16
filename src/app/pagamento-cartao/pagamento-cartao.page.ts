import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento-cartao',
  templateUrl: './pagamento-cartao.page.html',
  styleUrls: ['./pagamento-cartao.page.scss'],
})
export class PagamentoCartaoPage implements OnInit {

  typeOfCard:any;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(result => {
      //this.typeOfCard = result.typeOfPayment;
      if(result.typeOfPayment === 'credito'){
        this.typeOfCard = 'crédito';
      }else if(result.typeOfPayment === 'debito'){
        this.typeOfCard = 'débito';
      }
      console.log("Cartão de",this.typeOfCard);

    })
  }
}
