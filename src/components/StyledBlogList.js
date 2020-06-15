import React from 'react';

const StyledBlogList = () => (
  <style jsx>{`
    .post-list {
      padding-inline-start: 0;
    }
    .post {
      display: flex;
      flex-direction: column;
      margin-bottom: 0;
    }
    .post .post-date {
      margin-bottom: 0.25rem;
    }
  `}</style>
);

export default StyledBlogList;
