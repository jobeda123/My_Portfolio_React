import React from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';

const Blog = () => {
    return (
        <section id="blog" className="projectArea bg-dark">
            <div className="row col-md-12 offset-md-1">
                <h1 className="text-white">Blog</h1>
                <div className="row d-flex">
                    <BlogDetail></BlogDetail>
                    <BlogDetail></BlogDetail>
                    <BlogDetail></BlogDetail>
                    <BlogDetail></BlogDetail>
                    <BlogDetail></BlogDetail>
                    <BlogDetail></BlogDetail>
                </div>
            </div>
        </section>
    );
};

export default Blog;