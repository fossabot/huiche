package org.huiche.web.api.method;

import org.huiche.core.exception.HuiCheError;
import org.huiche.core.util.Assert;
import org.huiche.data.entity.BaseEntity;
import org.huiche.web.ServiceProvider;
import org.huiche.web.api.Api;
import org.huiche.web.response.BaseResult;
import org.springframework.web.bind.annotation.DeleteMapping;

import javax.annotation.Nullable;

/**
 * restful 删除多条数据
 *
 * @author Maning
 */
public interface DelMulti<T extends BaseEntity<T>> extends Api, ServiceProvider<T> {
    /**
     * 删除一条数据
     *
     * @param ids 以逗号分隔的id
     * @return 成功
     */
    @DeleteMapping
    default BaseResult<Long> del(@Nullable String ids) {
        Assert.notNull(HuiCheError.NOT_NULL, ids);
        return ok(service().delete(ids));
    }
}