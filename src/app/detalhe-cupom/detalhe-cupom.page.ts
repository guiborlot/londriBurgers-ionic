import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-cupom',
  templateUrl: './detalhe-cupom.page.html',
  styleUrls: ['./detalhe-cupom.page.scss'],
})
export class DetalheCupomPage implements OnInit {

  id:string;
  cupomAtual:any;


  constructor(private http:HttpClient ,public apiServiceService:ApiServiceService, public activatedRoute: ActivatedRoute) { 
    this.cupomAtual = {}
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id Cupom: ",this.id);
    this.setCupomAtual(Number(this.id));
    console.log(this.cupomAtual);
  }

  setCupomAtual(id: number): void{

    this.apiServiceService.setCupomAtual(id).subscribe(result =>{
      this.cupomAtual = result;
      console.log(this.cupomAtual);
    })

  }

}
