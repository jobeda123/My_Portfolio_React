import React from "react";
import BlogDetail from "../BlogDetail/BlogDetail";
import blog1 from "../../images/blog1.jpeg";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import blog4 from "../../images/blog4.jpeg";

const blogInfo = [
  {
    title: "JavaScript For Beginner",
    image: blog1,
    link: "https://jakhi161265.medium.com/javascript-for-beginner-d40d1a67968d",
  },
  {
    title: "Some Tricky Topic Of JavaScript",
    image: blog2,
    link: "https://jakhi161265.medium.com/some-tricky-topic-of-javascrip-c50fd9e92ff6",
  },
  {
    title: "Some Fundamental Things of React!!!!!!",
    image: blog3,
    link: "https://jakhi161265.medium.com/how-to-start-love-with-react-js-70b5874c2ef9",
  },
  {
    title: "Some Interesting Topics Of JavaScript",
    image: blog4,
    link: "https://jakhi161265.medium.com/some-interesting-topic-of-javascript-7b17c2ae83c9",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="projectArea bg-dark">
      <div className="row col-md-12 offset-md-1">
        <h1 className="text-white">Blog</h1>

        <div className="row d-flex">
          {blogInfo.map((blog) => (
            <BlogDetail key={blog.title} blog={blog}></BlogDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
