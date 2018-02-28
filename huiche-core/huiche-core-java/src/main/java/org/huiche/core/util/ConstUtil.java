package org.huiche.core.util;

import org.huiche.core.consts.ConstClass;
import org.huiche.core.consts.ConstField;
import org.huiche.core.consts.ConstVal;

import javax.annotation.Nonnull;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * 常量类工具类
 *
 * @author Maning
 */
public class ConstUtil {
    public static <T extends ConstClass> List<ConstVal> getValList(Class<T> constant) {
        if (null == constant) {
            return Collections.emptyList();
        }
        List<ConstVal> list = new ArrayList<>();
        for (Field field : constant.getFields()) {
            ConstField annotation = field.getAnnotation(ConstField.class);
            try {
                list.add(ConstVal.put(field.get(null).toString(), annotation.value()));
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        return list;
    }

    public static <T extends ConstClass> List<ConstVal> getValListWithExtra(Class<T> constant) {
        if (null == constant) {
            return Collections.emptyList();
        }
        List<ConstVal> list = new ArrayList<>();
        for (Field field : constant.getFields()) {
            ConstField annotation = field.getAnnotation(ConstField.class);
            try {
                list.add(ConstVal.put(field.get(null).toString(), annotation.value(), annotation.extra()));
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        return list;
    }

    public static <T extends ConstClass> String getTextByValue(@Nonnull Class<T> constant, @Nonnull Object value) {
        for (ConstVal val : getValList(constant)) {
            if (val.getValue().equals(value.toString())) {
                return val.getText();
            }
        }
        return value + "";
    }

    public static <T extends ConstClass> String getFormatJavaScript(@Nonnull Class<T> constant) {
        StringBuilder sb = new StringBuilder();
        for (ConstVal val : getValList(constant)) {
            sb.append("if(val===");
            sb.append(val.getValue());
            sb.append(") return '");
            sb.append(val.getText());
            sb.append("';");
        }
        sb.append("return val;");
        return sb.toString();
    }

}