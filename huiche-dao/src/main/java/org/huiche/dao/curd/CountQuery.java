package org.huiche.dao.curd;

import com.querydsl.core.types.Predicate;
import com.querydsl.sql.SQLQuery;
import org.huiche.dao.provider.PathProvider;
import org.huiche.dao.provider.SqlProvider;
import org.huiche.dao.util.QueryUtil;

import javax.annotation.Nullable;

/**
 * @author Maning
 */
public interface CountQuery<T> extends PathProvider<T>, SqlProvider {
    /**
     * 查询数量
     *
     * @param predicate 条件
     * @return 数量
     */
    default long count(@Nullable Predicate... predicate) {
        SQLQuery<T> query = sql().selectFrom(root());
        if (null != predicate && predicate.length > 0) {
            query = query.where(predicate);
        }
        return QueryUtil.count(query);
    }
}