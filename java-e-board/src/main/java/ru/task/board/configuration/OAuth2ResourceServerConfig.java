package ru.task.board.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

/**
 * Конфигурация сервиса ресурсов
 */
@Configuration
@EnableResourceServer
public class OAuth2ResourceServerConfig extends ResourceServerConfigurerAdapter {

  /** Конфигурация endpoint`ов по доступу к ресурсам */
  @Override
  public void configure(HttpSecurity http) throws Exception {
    http
      .csrf().disable()
      .authorizeRequests()
            .antMatchers("/oauth/**",
                    "/oauth/check_token/*",
                    "/activation/*",
                    "/user/**",
                    "/",
                    "/v3/api-docs.yaml",
                    "/v3/api-docs/**",
                    "/swagger-ui.html",
                    "/swagger-ui/**",
                    "/registration/**",
                    "/category/**",
                    "/ad/**",
                    "/characteristic/subcategory/*",
                    "/characteristic/advert/*",
                    "/subcategory/**",
                    "/forgotPassword",
                    "/forgotPassword/*",
                    "/characteristic/*").permitAll()
            .anyRequest().authenticated()
        .and()
            .rememberMe().key("uniqueAndSecret");
  }
}