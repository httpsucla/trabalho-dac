package br.net.microsservicos.gerente.services;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;


@Service
public class GerenteConsumerMenosClientes {

	private Long idGerenteMenosClientes;

	@RabbitListener(queues = "gerente-menos-clientes")
	public void receive(@Payload Long gerenteId) throws JsonMappingException, JsonProcessingException {
		if (idGerenteMenosClientes == null || gerenteId != idGerenteMenosClientes) {
			idGerenteMenosClientes = gerenteId;
		}
	}

	public Long getGerenteMenosClientes() {
		return idGerenteMenosClientes;
	}
}