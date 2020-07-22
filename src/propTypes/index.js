import PropTypes from 'prop-types';

export const frontmatterPropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  bannerImgSrc: PropTypes.string,
  bannerImgAlt: PropTypes.string,
  youtubeEmbed: PropTypes.string,
  codesandboxSample: PropTypes.string,
  githubSample: PropTypes.string,
}).isRequired;

export const postListPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    frontmatter: frontmatterPropTypes,
    slug: PropTypes.string.isRequired,
  }),
).isRequired;
