import React from 'react';
import Link from 'next/link';
import StyledBlogList from './StyledBlogList';
import { postListPropTypes } from 'src/propTypes';
import { getReadableDate } from 'src/utils/date';

const BlogList = ({ posts }) => (
  <>
    <ul className="post-list">
      {posts.length > 0 &&
        posts.map((post) => (
          <li key={post.frontmatter.title} className="post">
            <h3 className="post-date">
              {getReadableDate(post.frontmatter.date)}
            </h3>
            <h2 className="post-title">
              <Link
                key={post.slug}
                href={{ pathname: '/blog/[slug]' }}
                as={{ pathname: `/blog/${post.slug}` }}
              >
                <span className="link">{post.frontmatter.title}</span>
              </Link>
            </h2>
          </li>
        ))}
    </ul>
    <style jsx>{StyledBlogList}</style>
  </>
);

BlogList.propTypes = {
  posts: postListPropTypes,
};

export default BlogList;
