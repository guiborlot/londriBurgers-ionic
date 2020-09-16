import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login:string;
  senha:string;
  erro:any

  constructor(public service:ApiServiceService, public router:Router) {
    
   }
  
  ngOnInit() {
  }

  logar(){
    this.erro = ""
    let login=this.login;
    let senha=this.senha;
    this.service.getLogin(login, senha).subscribe(result =>{
      if(result > ""){
        this.router.navigate(['/menu'])
      } else{
        this.erro = "erro"
      }
    })
  }
}
