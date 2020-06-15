import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import StyledHeader from './StyledHeader';
import StyledAvatar from './StyledAvatar';

const Header = ({ headline }) => {
  return (
    <header>
      <div className="left">
        <Link href="/">
          <nav className="nav" role="navigation" aria-label="main navigation">
            <a>
              <StyledAvatar
                src="/animoji.png"
                alt="Ryan's Animoji with a blue background"
              />
              <h1>{headline}</h1>
            </a>
          </nav>
        </Link>
      </div>
      <StyledHeader />
    </header>
  );
};

Header.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Header;
