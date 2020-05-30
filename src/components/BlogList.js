import React from "react";
import Link from "next/link";
import StyledBlogList from "./StyledBlogList";

const BlogList = ({ posts }) => {
  const truncateSummary = (content) => content.slice(0, 200).trimEnd();
  const reformatDate = (fullDate) => new Date(fullDate).toDateString();

  return (
    <StyledBlogList>
      <ul className="list">
        {posts.length > 0 &&
          posts.map((post) => (
            <li className="post" key={post.frontmatter.title}>
              <div className="post-info">
                <h2 className="post-title">
                  <Link
                    key={post.slug}
                    href={{ pathname: `/blog/[slug]` }}
                    as={{ pathname: `/blog/${post.slug}` }}
                  >
                    <a>{post.frontmatter.title}</a>
                  </Link>
                </h2>
                <h3 className="post-date">
                  {reformatDate(post.frontmatter.date)}
                </h3>
                <div className="post-summary">
                  {truncateSummary(post.markdownBody)}...
                </div>
              </div>
            </li>
          ))}
      </ul>
    </StyledBlogList>
  );
};

export default BlogList;
