import React from 'react';
import { frontmatterPropTypes } from 'src/propTypes';
import { getReadableDate } from 'src/utils/date';
import StyledBanner from 'src/components/Blog/BlogBanner';

const BlogHeader = ({ frontmatter }) => {
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
    <header>
      <h1>{title}</h1>
      <h3>{readableDate}</h3>
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
      {bannerImgSrc && <StyledBanner src={bannerImgSrc} alt={bannerImgAlt} />}
    </header>
  );
};

BlogHeader.propTypes = {
  frontmatter: frontmatterPropTypes,
};

export default BlogHeader;
