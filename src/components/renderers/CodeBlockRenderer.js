import React from 'react';
import PropTypes from 'prop-types';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import StyledCodeBlock from './StyledCodeBlock';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('bash', bash);

const CodeBlock = ({ language, value }) => {
  return (
    <div className="code-block">
      <SyntaxHighlighter style={prism} language={language}>
        {value}
      </SyntaxHighlighter>
      <style jsx>{StyledCodeBlock}</style>
    </div>
  );
};

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
};

CodeBlock.defaultProps = {
  language: null,
};

export default CodeBlock;
