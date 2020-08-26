import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../service/pessoa.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas-list.component.html',
  styleUrls: []
})


export class PessoasComponentList implements OnInit {

  pessoas: Pessoa[];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.pessoaService.getPessoas().subscribe(data => {
      this.pessoas = data;
    }, error => {
      alert('Oh não! aconteceu um erro! -> ' + error.message)
    });
  }


  mensagem(content, pessoa) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      if (result === 's') {
        this.excluirPessoa(pessoa);
      }
    });
  }

  excluirPessoa(pessoa: Pessoa): void {
    this.pessoaService.deletePessoa(pessoa).subscribe(data => {
      this.pessoas = this.pessoas.filter(u => u !== pessoa);
    }, error => {
      alert('Oh não! aconteceu um erro! -> ' + error.message)
    });
  }

  new() {
    this.router.navigate(['./new'], { relativeTo: this.route });
  }

  edit(data?: any) {
    this.router.navigate(['./edit', data.id], { relativeTo: this.route });
  }


}
