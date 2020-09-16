import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PagamentoCaixaPage } from './pagamento-caixa.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentoCaixaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PagamentoCaixaPage]
})
export class PagamentoCaixaPageModule {}
