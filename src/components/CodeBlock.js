import React from "react";
import Lowlight from "react-lowlight";
// import shallowCompare from "react-addons-shallow-compare";
import js from "highlight.js/lib/languages/javascript";

Lowlight.registerLanguage("js", js);

const CodeBlock = ({ language, value }) => {
  // TODO: Redo this in hooks.
  // shouldComponentUpdate(nextProps, nextState) {
  //   return shallowCompare(this, nextProps, nextState);
  // },
  return <Lowlight value={value || ""} language={language || "js"} />;
};

export default CodeBlock;
