import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'menu',
        loadChildren: '../menu/menu.module#MenuPageModule'
      },
      {
        path: 'cardapio',
        loadChildren: '../cardapio/cardapio.module#CardapioPageModule'
      },
      {
        path: 'cupons',
        loadChildren: '../cupons/cupons.module#CuponsPageModule'
      },
      { 
        path: 'produtos/:nomeCategoria', 
        loadChildren: '../produtos/produtos.module#ProdutosPageModule' 
      },
      {
         path: 'cupons/:id', 
         loadChildren: '../detalhe-cupom/detalhe-cupom.module#DetalheCupomPageModule'
      },
      {
        path: 'carrinho',
        loadChildren: '../carrinho/carrinho.module#CarrinhoPageModule'
      }
    ]
  },
  {
    path: 'menu',
    redirectTo: '/tabs/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
