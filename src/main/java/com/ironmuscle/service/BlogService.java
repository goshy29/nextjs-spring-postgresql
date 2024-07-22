package com.ironmuscle.service;

import com.ironmuscle.model.Blog;
import com.ironmuscle.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogService {
    private final BlogRepository blogRepository;

    @Autowired
    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    public Optional<Blog> getBlogById(Long id) {
        return blogRepository.findById(id);
    }

    public Blog createBlog(Blog blog) {
        return blogRepository.save(blog);
    }

    public boolean deleteBlog(Long id) {
        boolean isBlogExist = blogRepository.existsById(id);
        if (isBlogExist) {
            blogRepository.deleteById(id);
        }
        return isBlogExist;
    }
}
