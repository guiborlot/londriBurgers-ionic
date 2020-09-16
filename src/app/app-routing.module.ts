import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cardapio', loadChildren: './cardapio/cardapio.module#CardapioPageModule' },
  { path: 'produtos/:nomeCategoria', loadChildren: './produtos/produtos.module#ProdutosPageModule' },
  { path: 'detalhesproduto/:id', loadChildren: './detalhe-produto/detalhe-produto.module#DetalheProdutoPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cupons', loadChildren: './cupons/cupons.module#CuponsPageModule' },
  { path: 'cupons/:id', loadChildren: './detalhe-cupom/detalhe-cupom.module#DetalheCupomPageModule' },
  { path: 'criar-conta', loadChildren: './criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'carrinho', loadChildren: './carrinho/carrinho.module#CarrinhoPageModule' },
  { path: 'pagamento', loadChildren: './pagamento/pagamento.module#PagamentoPageModule' },
  { path: 'pagamentocartao/:typeOfPayment', loadChildren: './pagamento-cartao/pagamento-cartao.module#PagamentoCartaoPageModule' },
  { path: 'pagamentocaixa/:typeOfPayment', loadChildren: './pagamento-caixa/pagamento-caixa.module#PagamentoCaixaPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
