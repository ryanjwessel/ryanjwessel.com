import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import StyledFooter from './StyledFooter';
import Icon from '../_icons/Icon';

const Footer = ({ github, linkedin, twitter }) => {
  return (
    <footer>
      <Link href="/info">
        <a className="icon-link">
          <Icon.About />
        </a>
      </Link>
      <a
        className="icon-link"
        href={github}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon.GitHub />
      </a>
      <a
        className="icon-link"
        href={twitter}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon.Twitter />
      </a>
      <a
        className="icon-link"
        href={linkedin}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon.LinkedIn />
      </a>
      <style jsx>{StyledFooter}</style>
    </footer>
  );
};

Footer.propTypes = {
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
};

export default Footer;
