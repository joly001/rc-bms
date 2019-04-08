package com.zcsoft.rc.bms.app.autoconfigure.components;

import com.sharingif.cube.security.web.exception.handler.validation.access.AccessDecisionCubeExceptionHandler;
import com.sharingif.cube.web.exception.handler.WebCubeExceptionHandler;
import com.sharingif.cube.web.exception.handler.validation.TokenValidationCubeExceptionHandler;
import com.sharingif.cube.web.exception.handler.validation.ValidationCubeExceptionHandler;
import com.sharingif.cube.web.springmvc.exception.NoHandlerFoundExceptionHandler;
import com.zcsoft.rc.bms.app.exception.ExtendedSingleBindValidationCubeExceptionHandler;
import com.zcsoft.rc.bms.app.exception.ExtendedSingleMethodArgumentNotValidExceptionHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class ComponentsAutoconfigure {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("*");
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.addAllowedMethod("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);
        return new CorsFilter(source);
    }

    @Bean(name = "springMVCCubeExceptionHandlers")
    public List<WebCubeExceptionHandler> createSpringMVCCubeExceptionHandlers(
            AccessDecisionCubeExceptionHandler accessDecisionCubeExceptionHandler
            , TokenValidationCubeExceptionHandler tokenValidationCubeExceptionHandler
            , ExtendedSingleMethodArgumentNotValidExceptionHandler extendedSingleMethodArgumentNotValidExceptionHandler
            , ExtendedSingleBindValidationCubeExceptionHandler extendedSingleBindValidationCubeExceptionHandler
            , NoHandlerFoundExceptionHandler noHandlerFoundExceptionHandler
            , ValidationCubeExceptionHandler validationCubeExceptionHandler
            , WebCubeExceptionHandler webCubeExceptionHandler) {

        List<WebCubeExceptionHandler> springMVCCubeExceptionHandlers = new ArrayList<WebCubeExceptionHandler>();
        springMVCCubeExceptionHandlers.add(accessDecisionCubeExceptionHandler);
        springMVCCubeExceptionHandlers.add(tokenValidationCubeExceptionHandler);
        springMVCCubeExceptionHandlers.add(extendedSingleMethodArgumentNotValidExceptionHandler);
        springMVCCubeExceptionHandlers.add(extendedSingleBindValidationCubeExceptionHandler);
        springMVCCubeExceptionHandlers.add(noHandlerFoundExceptionHandler);
        springMVCCubeExceptionHandlers.add(validationCubeExceptionHandler);
        springMVCCubeExceptionHandlers.add(webCubeExceptionHandler);

        return springMVCCubeExceptionHandlers;

    }

}
