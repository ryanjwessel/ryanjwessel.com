import React from 'react';
import PropTypes from 'prop-types';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from 'src/components/Layout/Layout';
import CodeBlockRenderer from 'src/components/_renderers/CodeBlockRenderer';
import { frontmatterPropTypes } from 'src/propTypes';
import { getReadableDate } from 'src/utils/date';
import StyledBanner from 'src/components/Banner';
const glob = require('glob');

const BlogTemplate = ({
  frontmatter,
  headline,
  description,
  github,
  linkedin,
  twitter,
  markdownBody,
}) => {
  const {
    title,
    date,
    bannerImgSrc,
    bannerImgAlt,
    codesandboxSample,
    githubSample,
  } = frontmatter;
  const readableDate = getReadableDate(date);

  return (
    <Layout
      pathname="/"
      title={title}
      headline={headline}
      description={description}
      github={github}
      linkedin={linkedin}
      twitter={twitter}
    >
      <article>
        <header>
          <h1>{title}</h1>
          <h3>{readableDate}</h3>
          {/* TODO: Separate this into a BlogHeader component */}
          {(githubSample || codesandboxSample) && (
            <h5>
              {githubSample && (
                <a
                  href={githubSample}
                  alt="Example Repo"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Example Repo
                </a>
              )}
              {githubSample && codesandboxSample && (
                <span style={{ margin: '0 4px' }}>|</span>
              )}
              {codesandboxSample && (
                <a
                  href={codesandboxSample}
                  alt="Example CodeSandbox"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Example CodeSandbox
                </a>
              )}
            </h5>
          )}
          {bannerImgSrc && (
            <StyledBanner src={bannerImgSrc} alt={bannerImgAlt} />
          )}
        </header>
        <div>
          <ReactMarkdown
            source={markdownBody}
            className="markdown-container"
            renderers={{ code: CodeBlockRenderer }}
          />
        </div>
        {(githubSample || codesandboxSample) && (
          <footer className="article-footer-card">
            <p>If you&apos;d like to see the source code:</p>
            <>
              {githubSample && (
                <a
                  href={githubSample}
                  alt="Example Repo"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Example Repo
                </a>
              )}
              {githubSample && codesandboxSample && (
                <span style={{ margin: '0 4px' }}>|</span>
              )}
              {codesandboxSample && (
                <a
                  href={codesandboxSample}
                  alt="Example CodeSandbox"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Example CodeSandbox
                </a>
              )}
            </>
          </footer>
        )}
      </article>
    </Layout>
  );
};

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
