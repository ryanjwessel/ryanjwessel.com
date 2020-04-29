import React from "react";

const LinkRenderer = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer noopener">
      {props.children}
    </a>
  );
};

export default LinkRenderer;
