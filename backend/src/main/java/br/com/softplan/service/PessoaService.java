package br.com.softplan.service;

import br.com.softplan.model.Pessoa;

import java.util.List;

public interface PessoaService {
    Pessoa insere(Pessoa pessoa);

    Pessoa excluir(int id);

    List<Pessoa> buscarTodos();

    Pessoa buscabyId(int id);

    Pessoa buscabyCpf(String cpf);

    Pessoa atualiza(Pessoa user);
}
