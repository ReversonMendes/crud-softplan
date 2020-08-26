import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxMaskModule} from 'ngx-mask';
import { PessoasComponent } from './components/pessoas/pessoas.component';
import { PessoaFormResolver } from './components/pessoas/pessoas.resolver';
import { PessoasComponentList } from './components/pessoas-list/pessoas-list.component';
import { PessoaService } from './service/pessoa.service';
import { CpfPipe } from  './pipe/cpf.pipe';



@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    PessoasComponentList,
    CpfPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [PessoaService, PessoaFormResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
