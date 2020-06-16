import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Meta from '../Meta';
import StyledLayout from './StyledLayout';
import Footer from './Footer/Footer';

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
    <div className="layout-container">
      <Meta title={title} description={description} />
      <Header headline={headline} />
      <section className="content-container">{children}</section>
      <Footer github={github} linkedin={linkedin} twitter={twitter} />
      <style jsx>{StyledLayout}</style>
    </div>
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
