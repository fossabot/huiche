package org.huiche.core.web.api.method;

import org.huiche.core.entity.BaseEntity;
import org.huiche.core.web.ServiceProvider;
import org.huiche.core.web.api.Api;
import org.huiche.core.web.response.BaseResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 获取单条数据
 *
 * @author Maning
 */
public interface Get<T extends BaseEntity> extends Api, ServiceProvider<T> {
    /**
     * 获取单条数据
     *
     * @param id id
     * @return 数据
     */
    @GetMapping("{id}")
    default BaseResult<T> get(@PathVariable Long id) {
        return ok(service().get(id));
    }
}