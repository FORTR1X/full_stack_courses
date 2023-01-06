package ru.task.board.configuration;

import io.swagger.v3.oas.models.*;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
                .addSecurityItem(new SecurityRequirement().addList("bearer"))
                .components(new Components()
                        .addSecuritySchemes("bearer",
                                new SecurityScheme()
                                        .type(SecurityScheme.Type.OAUTH2)
                                        .scheme("bearer")
                                        .bearerFormat("JWT")
                                        .flows(new OAuthFlows()
                                                .password(new OAuthFlow()
                                                        .refreshUrl("/oauth/token")
                                                        .tokenUrl("/oauth/token")
                                                        .scopes(new Scopes().addString("ad", "scope объявлений"))
                                                ))))
                .info(new Info().title("e-board service")
                        .description("e-board service")
                        .version("v0.0.1"));
    }

}
