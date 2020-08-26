package br.com.softplan.service;

import br.com.softplan.model.Pessoa;
import br.com.softplan.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class PessoaServiceImpl implements PessoaService {

    @Autowired
    private PessoaRepository repository;

    @Override
    public Pessoa insere(Pessoa pessoa) {
        return repository.save(pessoa);
    }

    @Override
    public Pessoa excluir(int id) {
        Pessoa pessoa = buscabyId(id);
        if(pessoa != null){
            repository.delete(pessoa);
        }
        return pessoa;
    }

    @Override
    public List<Pessoa> buscarTodos() {
        return repository.findAll();
    }

    @Override
    public Pessoa buscabyId(int id) {
        return repository.findOne(id);
    }

    @Override
    public Pessoa buscabyCpf(String cpf) {
        return repository.findByCpf(cpf);
    }

    @Override
    public Pessoa atualiza(Pessoa pessoa) {
        pessoa.setDtAtualizacao(LocalDateTime.now());
        return repository.save(pessoa);
    }
}
