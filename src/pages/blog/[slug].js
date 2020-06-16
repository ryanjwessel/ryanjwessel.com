import React from 'react';
import PropTypes from 'prop-types';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from 'src/components/Layout/Layout';
import CodeBlockRenderer from 'src/components/_renderers/CodeBlockRenderer';
import { frontmatterPropTypes } from 'src/propTypes';
import BlogHeader from 'src/components/Blog/BlogHeader';
import BlogFooter from 'src/components/Blog/BlogFooter';
import StyledBlogTemplate from 'src/components/Blog/StyledBlogTemplate';
import ImageRenderer from 'src/components/_renderers/ImageRenderer';
import InlineCodeRenderer from 'src/components/_renderers/InlineCodeRenderer';
const glob = require('glob');

const BlogTemplate = ({
  frontmatter,
  headline,
  description,
  github,
  linkedin,
  twitter,
  markdownBody,
}) => (
  <Layout
    pathname="/"
    title={frontmatter.title}
    headline={headline}
    description={description}
    github={github}
    linkedin={linkedin}
    twitter={twitter}
  >
    <article>
      <BlogHeader frontmatter={frontmatter} />
      <div>
        <ReactMarkdown
          source={markdownBody}
          className="markdown-container"
          renderers={{
            code: CodeBlockRenderer,
            inlineCode: InlineCodeRenderer,
            image: ImageRenderer,
          }}
        />
      </div>
      <BlogFooter frontmatter={frontmatter} />
    </article>
    <style jsx>{StyledBlogTemplate}</style>
  </Layout>
);

BlogTemplate.propTypes = {
  frontmatter: frontmatterPropTypes,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  markdownBody: PropTypes.string.isRequired,
};

export default BlogTemplate;

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const post = await import(`src/posts/${slug}.md`);
  const {
    title,
    headline,
    description,
    github,
    linkedin,
    twitter,
  } = await import('src/data/config.json');
  const { data, content } = matter(post.default);

  return {
    props: {
      title,
      headline,
      description,
      github,
      linkedin,
      twitter,
      frontmatter: data,
      markdownBody: content,
    },
  };
}

export async function getStaticPaths() {
  // get all .md files in the posts dir
  const blogs = glob.sync('src/posts/**/*.md');

  // remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) =>
    file.split('/')[2].replace(/ /g, '-').slice(0, -3).trim(),
  );

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
