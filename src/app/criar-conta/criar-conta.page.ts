import { Component, OnInit } from '@angular/core';

import { ApiServiceService } from '../services/api-service.service';

import { Router } from "@angular/router";

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit {

  login: string;
  senha: string;
  outraSenha: string;
  erro:string;

  constructor(public apiServiceService: ApiServiceService,
              public router: Router) { }

  ngOnInit() {
  }

  criarConta(){
    if(this.senha == this.outraSenha){
      console.log("botao")
    let conta={
      "login":this.login,
      "senha":this.senha
    }
    this.apiServiceService.criarConta(conta).subscribe(result =>{
      this.router.navigate(['/login'])
    })
    } else{
      this.erro = "erro"
    }
  }

}
