package br.com.softplan.model;

import br.com.softplan.converter.LocalDateTimeConverter;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Convert;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "pessoas", schema = "public")
@Getter
@Setter
public class Pessoa {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String nome;

    @Column
    private String email;

    @Column(name = "dtnascimento")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dtNascimento;

    @Column
    private char sexo;

    @Column
    private String cpf;

    @Column
    private String naturalidade;

    @Column
    private String nacionalidade;

    @Column(name = "dtatualizacao")
    @JsonIgnore
    @Convert(converter = LocalDateTimeConverter.class)
    private LocalDateTime dtAtualizacao;

}
