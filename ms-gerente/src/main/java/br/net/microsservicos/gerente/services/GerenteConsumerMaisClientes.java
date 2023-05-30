package br.net.microsservicos.gerente.services;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;


@Service
public class GerenteConsumerMaisClientes {

	private Long idGerenteMaisClientes;

	@RabbitListener(queues = "gerente-mais-clientes")
	public void receive(@Payload Long gerenteId) throws JsonMappingException, JsonProcessingException {
		if (idGerenteMaisClientes == null || gerenteId != idGerenteMaisClientes) {
			idGerenteMaisClientes = gerenteId;
		}
	}

	public Long getGerenteMaisClientes() {
		return idGerenteMaisClientes;
	}
}