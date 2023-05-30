package br.net.microsservicos.gerente.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.net.microsservicos.gerente.model.GerenteModel;

public interface GerenteRepository extends JpaRepository<GerenteModel, Long> {
	public GerenteModel findByIdUsuarios(int idUsuarios);

	public GerenteModel findByCpf(String cpf);

	public boolean existsByCpf(String cpf);
	
	public GerenteModel findByCodLogin(String login);
}
