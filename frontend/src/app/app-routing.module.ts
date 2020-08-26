import { PessoaFormResolver } from './components/pessoas/pessoas.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasComponentList } from './components/pessoas-list/pessoas-list.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';
const routes: Routes = [
  {
    path: 'pessoas', children: [
      {
        path: '',
        component: PessoasComponentList,
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: PessoasComponent,
      },
      {
        path: 'edit/:id',
        component: PessoasComponent,
        resolve: {
          model: PessoaFormResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
