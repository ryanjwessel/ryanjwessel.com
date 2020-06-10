module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:json/recommended',
    'plugin:md/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'react-hooks', 'json', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'md/remark': [
      'error',
      {
        plugins: [
          'frontmatter',
          'preset-lint-consistent',
          ['lint-maximum-line-length', false],
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
      linkComponents: [
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        {
          name: 'Link',
          linkAttribute: 'to',
        },
      ],
    },
  },
  overrides: [
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
      rules: {
        'prettier/prettier': [
          'error',
          // Important to force prettier to use "markdown" parser - otherwise it wouldn't be able to parse *.md files.
          // You also can configure other options supported by prettier here - "prose-wrap" is
          // particularly useful for *.md files
          { parser: 'markdown' },
        ],
      },
    },
  ],
};
