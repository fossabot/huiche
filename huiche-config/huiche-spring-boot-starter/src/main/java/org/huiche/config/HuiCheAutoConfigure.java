package org.huiche.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hibernate.validator.HibernateValidator;
import org.huiche.core.exception.BaseException;
import org.huiche.core.exception.SystemError;
import org.huiche.core.json.JsonApi;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.validation.Validation;
import javax.validation.Validator;
import java.io.IOException;

/**
 * @author Maning
 */
@Configuration
@AutoConfigureOrder(Integer.MAX_VALUE)
public class HuiCheAutoConfigure {
    @Bean
    @ConditionalOnBean(ObjectMapper.class)
    public JsonApi jsonUtil(ObjectMapper objectMapper) {
        return new JsonApi() {
            @Override
            public String toJson(Object object) {
                try {
                    return objectMapper.writeValueAsString(object);
                } catch (JsonProcessingException e) {
                    throw new BaseException(SystemError.JSON_ERROR);
                }
            }

            @Override
            public <T> T fromJson(String json, Class<T> clazz) {
                try {
                    return objectMapper.readValue(json, clazz);
                } catch (IOException e) {
                    throw new BaseException(SystemError.JSON_ERROR);
                }
            }
        };
    }

    @Bean
    @ConditionalOnMissingBean
    @ConditionalOnWebApplication
    public ErrorHandler errorHandler() {
        return new ErrorHandler();
    }

    @Bean("fastValidator")
    @ConditionalOnClass(HibernateValidator.class)
    public Validator fastValidator() {
        return Validation.byProvider(HibernateValidator.class)
                .configure()
                .failFast(true)
                .buildValidatorFactory().getValidator();
    }
}