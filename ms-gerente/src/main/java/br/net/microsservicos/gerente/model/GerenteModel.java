package br.net.microsservicos.gerente.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "gerente")
public class GerenteModel implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cod")
	private Long cod;
	@Column(name = "nome")
	private String nome;
	@Column(name = "email")
	private String email;
	@Column(name = "cpf")
	private String cpf;
	@Column(name = "telefone")
	private String telefone;
	@Column(name = "codLogin")
	private Long codLogin;

	public GerenteModel() {
		super();
	}

	public GerenteModel(Long cod, String nome, String email, String cpf, String telefone, Long codLogin) {
		super();
		this.cod = cod;
		this.nome = nome;
		this.email = email;
		this.cpf = cpf;
		this.telefone = telefone;
		this.codLogin = codLogin;
	}

	public Long getCod() {
		return cod;
	}

	public void setCod(Long cod) {
		this.cod = cod;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Long getCodLogin() {
		return codLogin;
	}

	public void setCodLogin(Long codLogin) {
		this.codLogin = codLogin;
	}

	
}