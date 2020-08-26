import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from 'src/app/service/pessoa.service';

@Injectable()
export class PessoaFormResolver implements Resolve<Pessoa> {

  constructor(private pessoaService: PessoaService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.pessoaService.getPessoaId(route.params['id']);
  }
}
