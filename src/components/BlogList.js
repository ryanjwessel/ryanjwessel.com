import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import StyledBlogList from './StyledBlogList';

const BlogList = ({ posts }) => {
  const reformatDate = (fullDate) => new Date(fullDate).toDateString();

  return (
    <StyledBlogList>
      <ul className="post-list">
        {posts.length > 0 &&
          posts.map((post) => (
            <li key={post.frontmatter.title} className="post">
              <h3 className="post-date">
                {reformatDate(post.frontmatter.date)}
              </h3>
              <h2 className="post-title">
                <Link
                  key={post.slug}
                  href={{ pathname: '/blog/[slug]' }}
                  as={{ pathname: `/blog/${post.slug}` }}
                >
                  <p className="link">{post.frontmatter.title}</p>
                </Link>
              </h2>
            </li>
          ))}
      </ul>
    </StyledBlogList>
  );
};

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BlogList;
