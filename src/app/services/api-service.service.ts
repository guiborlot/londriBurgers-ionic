import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = "http://localhost:3000/";

  listaCategorias: any;
  nomeCategoria: any;

  listaProdutos: any;
  produtoAtual: any;

  listaCupons: any;
  cupomAtual: any;

  login: string;
  listaCarrinho: any;

  listaPedido: any;

  cupom;


  constructor(private http: HttpClient) {
    this.produtoAtual = {};
  }

  ngOnInit() {
  }

  getListaCategorias(): Observable<any[]> {
    let urlCategoria = this.url + "categorias"
    console.log('Url Categorias', urlCategoria);
    return this.http.get<any[]>(urlCategoria);
  }

  getListaProdutos(nomeCategoria: string): Observable<any[]> {
    let urlProdutos = this.url;
    urlProdutos += nomeCategoria;
    console.log('Url Produtos: ', urlProdutos);
    this.listaProdutos = this.http.get<any>(urlProdutos);
    this.nomeCategoria = nomeCategoria;
    console.log(`nomeCategoriaService:`, this.nomeCategoria)
    return this.listaProdutos;
  }

  setProdutoAtual(id: number): Observable<any> {
    let url = this.url;
    this.produtoAtual = {};
    if (id > 0) {
      url += this.nomeCategoria + "/" + id;
      console.log(url);
      this.produtoAtual = this.http.get<any>(url);
    }
    return this.produtoAtual;
  }

  getListaCupons(): Observable<any[]> {

    let urlCupons = this.url + "cupons";
    console.log("Url Cupons: ", urlCupons);
    return this.http.get<any[]>(urlCupons);

  }

  setCupomAtual(id: Number): Observable<any> {
    let url = this.url;
    this.cupomAtual = {};
    if (id > 0) {
      url += "cupons" + "/" + id;
      console.log(url);
      this.cupomAtual = this.http.get<any>(url);
    }
    console.log("cupomAtual", this.cupomAtual);
    return this.cupomAtual;
  }

  criarConta(conta: any): Observable<any> {
    let novaConta = {
      "id": 0,
      "login": conta.login,
      "senha": conta.senha
    }
    let url = this.url + "clientes"
    console.log("criarConta: " + conta);
    return this.http.post(url, novaConta);
  }

  getLogin(login: string, senha: string) {
    //url para fazer login
    this.login = login
    let url = this.url + "clientes?login=" + login + "&senha=" + senha;
    console.log(url)
    //retornando url de login
    return this.http.get(url)
  }
  //apresenta os itens que há no carrinho
  getCarrinho() {
    let url = this.url + "carrinho"
    this.listaCarrinho = this.http.get(url)
    return this.listaCarrinho
  }

  addProdutoCarrinho(produto, preco, img) {
    let url = this.url + "carrinho"
    let novoItem = {
      "id": 0,
      "nomeProduto": produto,
      "price": preco,
      "img": img
    }
    return this.http.post(url, novoItem);
  }

  apagarProdutoCarrinho(id) {
    let url = this.url + "carrinho/" + id
    return this.http.delete(url)
  }

  //reseta o carrinho
  resetCarrinho(id) {

    let url = this.url + "carrinho/" + id;
    return this.http.delete(url);

  }
  postPedido(nomeProduto, price, img) {
    let urlPedido = `${this.url}pedidos`;
    console.log(urlPedido);
    let listaPedido = [
      {
        "nomeProduto": nomeProduto,
        "price": price,
        "img": img
      }
    ]

    let pedido = {
      "id": 0,
      "bodyPedido": listaPedido
    }

    return this.http.post(urlPedido, pedido)
  }

  getListaPedido() {
    let urlPedido = `${this.url}pedidos`;
    return this.http.get(urlPedido);
  }
  aplicarDesconto(codigo) {
    console.log("chamei o serviço de cupom")
    let url = this.url + "cupons?code=" + codigo
    console.log(url)
    return this.http.get(url)

  }

}

