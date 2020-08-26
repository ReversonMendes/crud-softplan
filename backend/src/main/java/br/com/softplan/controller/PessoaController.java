package br.com.softplan.controller;

import br.com.softplan.model.Pessoa;
import br.com.softplan.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/cadastros"})
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @PostMapping
    public Pessoa insert(@RequestBody Pessoa pessoa){
        return pessoaService.insere(pessoa);
    }

    @GetMapping(path = {"/{id}"})
    public  Pessoa getById(@PathVariable("id") int id){
        return pessoaService.buscabyId(id);
    }


    @GetMapping(path = {"/cpf/{cpf}"})
    public  Pessoa getById(@PathVariable("cpf") String cpf){
        return pessoaService.buscabyCpf(cpf);
    }


    @PutMapping(path = {"/{id}"})
    public Pessoa update(@RequestBody Pessoa pessoa){
        return  pessoaService.atualiza(pessoa);
    }

    @DeleteMapping(path = {"/{id}"})
    public Pessoa delete(@PathVariable("id") int id){
        return pessoaService.excluir(id);
    }

    @GetMapping
    public List<Pessoa>getAll(){
        return pessoaService.buscarTodos();
    }

}
