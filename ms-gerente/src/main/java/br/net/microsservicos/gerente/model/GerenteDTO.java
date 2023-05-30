package br.net.microsservicos.gerente.model;

import java.io.Serializable;

public class GerenteDTO implements Serializable {

	private Long cod;
	private String nome;
	private String email;
	private String cpf;
	private String telefone;
	private Long codLogin;

	public GerenteDTO(Long cod, String nome, String email, String senha, String perfil, String cpf, Long codLogin, String telefone) {
		super();
		this.cod = cod;
		this.nome = nome;
		this.email = email;
		this.telefone = telefone;
		this.cpf = cpf;
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
