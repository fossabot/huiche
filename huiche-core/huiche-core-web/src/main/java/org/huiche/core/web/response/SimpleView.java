package org.huiche.core.web.response;


import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * @author Maning
 */
public class SimpleView implements View {
    private final String content;
    private final String contentType;

    public SimpleView(String content, String contentType) {
        this.content = content;
        this.contentType = contentType;
    }

    @Override
    public String getContentType() {
        return contentType;
    }

    @Override
    public void render(Map<String, ?> model, @Nullable HttpServletRequest request, @NonNull HttpServletResponse response) throws Exception {
        response.setCharacterEncoding("UTF-8");
        response.setContentType(contentType);
        response.getWriter().write(content);
        response.getWriter().flush();
    }

    public static ModelAndView js(String content) {
        return new ModelAndView(new SimpleView(content, "text/javascript"));
    }

    public static ModelAndView json(String content) {
        return new ModelAndView(new SimpleView(content, "application/json"));
    }

    public static ModelAndView css(String content) {
        return new ModelAndView(new SimpleView(content, "text/css"));
    }

    public static ModelAndView html(String content) {
        return new ModelAndView(new SimpleView(content, "text/html"));
    }

    public static ModelAndView forward(String url) {
        return new ModelAndView("forward:" + url);
    }

    public static ModelAndView redirect(String url) {
        return new ModelAndView(new RedirectView(url));
    }
}