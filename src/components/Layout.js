import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Meta from './Meta';
import StyledLayout from './StyledLayout';
import Footer from './Footer';

const Layout = ({
  title,
  headline,
  description,
  github,
  linkedin,
  twitter,
  children,
}) => {
  return (
    <StyledLayout>
      <Meta title={title} description={description} />
      <Header headline={headline} />
      <div className="content">{children}</div>
      <Footer github={github} linkedin={linkedin} twitter={twitter} />
    </StyledLayout>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
