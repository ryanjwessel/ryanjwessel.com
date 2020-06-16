import React from 'react';
import { frontmatterPropTypes } from 'src/propTypes';

const BlogFooter = ({ frontmatter }) => {
  const { codesandboxSample, githubSample } = frontmatter;

  if (!githubSample || !codesandboxSample) {
    return null;
  }
  return (
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
  );
};

BlogFooter.propTypes = {
  frontmatter: frontmatterPropTypes,
};

export default BlogFooter;
