package br.net.microsservicos.gerente.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import br.net.microsservicos.gerente.model.GerenteDTO;
import br.net.microsservicos.gerente.model.GerenteModel;
import br.net.microsservicos.gerente.model.LoginDTO;
import br.net.microsservicos.gerente.repository.GerenteRepository;
import br.net.microsservicos.gerente.services.GerenteConsumerMaisClientes;
import br.net.microsservicos.gerente.services.GerenteConsumerMenosClientes;
import br.net.microsservicos.gerente.config.RabbitMQConfig;


@CrossOrigin
@RestController
@RequestMapping("gerentes")
public class GerenteController {
	
	private final GerenteConsumerMaisClientes gerenteConsumerMaisClientes;
	private final GerenteConsumerMenosClientes gerenteConsumerMenosClientes;

	@Autowired
	private DirectExchange exchange;
	
	@Autowired
	private RabbitTemplate rabbitTemplate;
	
	@Autowired
	private GerenteRepository gerenteRepository;

	
	@Autowired
	private ModelMapper mapper;
	
	 public GerenteController(GerenteConsumerMaisClientes gerenteConsumerMaisClientes, GerenteConsumerMenosClientes gerenteConsumerMenosClientes) {
	    this.gerenteConsumerMaisClientes = gerenteConsumerMaisClientes;
	    this.gerenteConsumerMenosClientes = gerenteConsumerMenosClientes;

	  }

	 @GetMapping("/gerentemaisclientes")
	  public ResponseEntity<Long> getGerenteMaisClientes() {
	    Long gerenteId = gerenteConsumerMaisClientes.getGerenteMaisClientes();
	    return ResponseEntity.ok(gerenteId);
	  }
	 
	 @GetMapping("/gerentemenosclientes")
	  public ResponseEntity<Long> getGerenteMenosClientes() {
	    Long gerenteId = gerenteConsumerMenosClientes.getGerenteMenosClientes();
	    return ResponseEntity.ok(gerenteId);
	  }
	 
	 
	@GetMapping("/getgerentes")
	public ResponseEntity<List<GerenteDTO>> getGerentes() {
			try {
			List<GerenteModel> lista = gerenteRepository.findAll();
			
			return ResponseEntity.ok(lista.stream().map(e -> mapper.map(e,GerenteDTO.class)).collect(Collectors.toList()));
				
			} catch (Exception e) {
				return ResponseEntity.status(500).build();
			}
	}
	 
	@GetMapping("/getbyid/{id}")
	public ResponseEntity<GerenteModel> getGerente(@PathVariable Long id) {
		try {
			System.out.print("teste");
			Optional<GerenteModel> gerenteOp = gerenteRepository.findById(id);

			if (gerenteOp.isPresent()) {
				GerenteModel gerente = gerenteOp.get();
				return ResponseEntity.ok(gerente);
			} else {
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(500).build();
		}
	}

	@GetMapping("/getbycpf/{cpf}")
	public ResponseEntity<GerenteDTO> getByCpf(@PathVariable String cpf) {
		try {
			GerenteModel gerente = gerenteRepository.findByCpf(cpf);

			if (gerente != null) {
				return ResponseEntity.ok(mapper.map(gerente, GerenteDTO.class));
			} else {
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(500).build();
		}
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<GerenteDTO> updateGerente(@PathVariable Long id, @RequestBody GerenteDTO gerenteBody) {
		try {
			Optional<GerenteModel> gerenteOp = gerenteRepository.findById(id);
			if (gerenteOp.isPresent()) {
				GerenteModel gerente = gerenteOp.get();
				System.out.print(gerente.getNome());
				gerente.setNome(gerenteBody.getNome());
				gerente.setEmail(gerenteBody.getEmail());
				gerente.setTelefone(gerenteBody.getTelefone());


				gerente = gerenteRepository.save(gerente);
				return ResponseEntity.ok(mapper.map(gerente, GerenteDTO.class));
			} else {
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(500).build();
		}
	}

	@PostMapping("/insert")
	public ResponseEntity<GerenteDTO> insertGerente(@RequestBody GerenteDTO gerenteBody) {
		try {
			Optional<GerenteModel> gerenteOp = gerenteRepository.findById(gerenteBody.getCod());
			System.out.println(gerenteOp.toString());
			if (gerenteOp.isPresent()) {
				System.out.print("teste5");
				return ResponseEntity.status(500).build();
			} else {
				GerenteModel gerente = mapper.map(gerenteBody, GerenteModel.class);
				System.out.print("teste");
				if (gerente.getCpf() != null && gerente.getEmail() != null && gerente.getNome() != null) {
					gerente = gerenteRepository.save(gerente);
					
				} else {
					return ResponseEntity.status(400).build();
				}

				return ResponseEntity.ok().build();
			}
		} catch (Exception e) {
			System.out.print("teste66");
			return ResponseEntity.status(500).build();
		}
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> deleteGerente(@PathVariable Long id) {
		try {

			if (gerenteRepository.count() == 1)
				throw new IllegalStateException("O ultimo gerente não pode ser deletado");

			gerenteRepository.deleteById(id);

			return ResponseEntity.ok().build();

		} catch (Exception e) {
			return ResponseEntity.status(500).build();
		}
	}
	
	@RabbitListener(queues = "login-gerente")
	public void LoginGerenteReceive (@Payload LoginDTO loginGerenteDTO) {
		try {
		
			GerenteModel usuLogin = gerenteRepository.findByCodLogin(loginGerenteDTO.getLogin());
			
			GerenteDTO obj = mapper.map(usuLogin, GerenteDTO.class);
			rabbitTemplate.convertAndSend(exchange.getName(), RabbitMQConfig.loginGerenteResponse, obj);
			
		}catch(Exception ex) {
			System.out.println(ex);
		}
		
	}

}