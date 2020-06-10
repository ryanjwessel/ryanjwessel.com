import PropTypes from 'prop-types';

export const frontmatterPropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  bannerImg: PropTypes.string,
  codesandbox: PropTypes.string,
  github: PropTypes.string,
}).isRequired;

export const postListPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    frontmatter: frontmatterPropTypes,
    slug: PropTypes.string.isRequired,
  }),
).isRequired;
