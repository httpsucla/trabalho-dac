package br.net.microsservicos.gerente.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;


public class LoginDTO implements Serializable {
	private Long id;
	private String login;
	private String senha;
	private Long tipo;
	
	
	@JsonCreator
    public LoginDTO(@JsonProperty("id") Long id,
    		@JsonProperty("login") String login,
    		@JsonProperty("senha") String senha,
    		@JsonProperty("tipo") Long tipo) {
		super();
		this.id = id;
		this.login = login;
		this.senha = senha;
		this.tipo = tipo;
    }
	
	
	public LoginDTO(String login, String senha) {
		super();
		this.login = login;
		this.senha = senha;
	}

	public LoginDTO() {
		super();
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getLogin() {
		return login;
	}


	public void setLogin(String login) {
		this.login = login;
	}


	public String getSenha() {
		return senha;
	}


	public void setSenha(String senha) {
		this.senha = senha;
	}


	public Long getTipo() {
		return tipo;
	}


	public void setTipo(Long tipo) {
		this.tipo = tipo;
	}
	

}
