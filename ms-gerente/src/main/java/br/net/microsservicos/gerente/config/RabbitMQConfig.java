package br.net.microsservicos.gerente.config;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;

@Configuration
public class RabbitMQConfig {

	public static String loginGerenteResponse = "login-gerente-response";
	
	@Bean
	public Queue queueLoginGerenteResponse(){
		return new Queue(loginGerenteResponse,true);
	}
	
	@Bean
	Binding loginGerenteResponseBinding(Queue queueLoginGerenteResponse, DirectExchange exchange) {
	     return BindingBuilder.bind(queueLoginGerenteResponse).to(exchange).with(loginGerenteResponse);
	 }
	
	   
	@Bean
	public ObjectMapper objectMapper() {
		return JsonMapper.builder().findAndAddModules().build();
	}
	
    @Bean
    DirectExchange exchange() {
        return new DirectExchange("Tadesco");

    }

    @Bean
    public MessageConverter converter(){
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public AmqpTemplate template(ConnectionFactory connectionFactory){
        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(converter());
        return rabbitTemplate;
    }
}
