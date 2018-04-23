package org.huiche.core.entity;


import org.huiche.core.annotation.sql.Column;

import java.io.Serializable;

/**
 * 基础实体类
 *
 * @author Maning
 */
@SuppressWarnings("unchecked")
public class BaseEntity<T extends BaseEntity> implements Serializable {
    /**
     * 主键
     */
    @Column(isPrimaryKey = true, comment = "主键ID")
    private Long id;
    /**
     * 创建时间
     */
    @Column(length = 19, comment = "创建时间,yyyy-MM-dd HH:mm:ss")
    private String createTime;
    /**
     * 修改时间
     */
    @Column(length = 19, comment = "修改时间,yyyy-MM-dd HH:mm:ss")
    private String modifyTime;

    public String getCreateTime() {
        return createTime;
    }

    public T setCreateTime(String createTime) {
        this.createTime = createTime;
        return (T) this;
    }

    public String getModifyTime() {
        return modifyTime;
    }

    public T setModifyTime(String modifyTime) {
        this.modifyTime = modifyTime;
        return (T) this;
    }

    public Long getId() {
        return id;
    }

    public T setId(Long id) {
        this.id = id;
        return (T) this;
    }

    @Override
    public String toString() {
        return "BaseEntity{" +
                "id=" + id +
                ", createTime='" + createTime + '\'' +
                ", modifyTime='" + modifyTime + '\'' +
                '}';
    }
}