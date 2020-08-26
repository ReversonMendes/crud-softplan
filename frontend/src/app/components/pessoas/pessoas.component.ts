import { Pessoa } from './../../models/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../service/pessoa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Validacoes } from '../../validators/validators';

@Component({
  selector: 'app-add-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  formulario: FormGroup;
  editPessoa = false;
  cpf: string;

  pessoa: Pessoa = new Pessoa();
  constructor(private route: ActivatedRoute, private router: Router, private pessoaService: PessoaService, private fb: FormBuilder) {
    const pessoaEdit = this.route.snapshot.data['model'];
    this.initFormGroup();

    if (pessoaEdit) {
      this.editPessoa = true;
      this.cpf = pessoaEdit.cpf;
      this.fillFormGroup(pessoaEdit);
    }
  }

  initFormGroup(): void {
    //Cria vaildações dos campos
    this.formulario = this.fb.group({
      id: [null],
      nome: [null, Validators.required],
      email: [null, Validators.email],
      cpf: [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(14), Validacoes.ValidaCpf])],
      dtNascimento: [null, Validators.compose([Validators.required, Validacoes.ValidaData])],
      sexo: [null, Validators.required],
      naturalidade: [null],
      nacionalidade: [null],
    });
  }

  fillFormGroup(pessoa: Pessoa) {
    this.formulario.reset(pessoa);
  }

  save() {
    let pessoa = this.formulario.value;
    //Validar cpf já gravado
    this.pessoaService.getPessoaCpf(pessoa.cpf).then(data => {
      if (this.editPessoa && data.id === pessoa.id) {
        this.atualizarPessoa(pessoa);
      } else if (data === null) {
        this.incluirPessoa(pessoa);
      } else {
        alert('O CPF informado já existe!');
      }
    });
  }

  validadeMask(field) {
    if (this.formulario.controls[field].value.length <= 0) {
      this.formulario.controls[field].setErrors({required: true});
    }
  }

  //Metodo para incluir pessoa
  incluirPessoa(pessoa): void {
    this.pessoaService.createPessoa(this.formulario.value)
      .subscribe(data => {
        this.router.navigate(['pessoas']);
      }, error => {
        console.log(error);
        alert("Oh não! aconteceu um erro! ->" + error.message);
      });
  };

  //atualizar cadastro de pessoa
  atualizarPessoa(pessoa) {
    this.pessoaService.updatePessoa(pessoa).subscribe(data => {
      this.router.navigate(['pessoas']);
    }, error => {
      alert('Oh não! aconteceu um erro! ->' + error.message);
    });
  }

  ngOnInit() { }

}
