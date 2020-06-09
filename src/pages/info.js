import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import LinkRenderer from '../components/renderers/LinkRenderer';

const Info = ({
  title,
  headline,
  description,
  github,
  linkedin,
  twitter,
  frontmatter,
  markdownBody,
}) => {
  return (
    <Layout
      pathname="/info"
      title={`About ${title}`}
      headline={headline}
      description={description}
      github={github}
      linkedin={linkedin}
      twitter={twitter}
    >
      <section>
        <h1>{frontmatter.title}</h1>
        <ReactMarkdown
          source={markdownBody}
          renderers={{ link: LinkRenderer }}
        />
      </section>
    </Layout>
  );
};

Info.propTypes = {
  // TODO: Make sharable prop types across project.
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  // TODO: Make frontmatter prop type shared.
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    codesandbox: PropTypes.string,
  }).isRequired,
  markdownBody: PropTypes.string.isRequired,
};

export default Info;

export async function getStaticProps() {
  const post = await import('../data/info.md');
  const {
    title,
    headline,
    description,
    github,
    linkedin,
    twitter,
  } = await import('../data/config.json');
  const { data, content } = matter(post.default);

  return {
    props: {
      title,
      headline,
      description,
      github,
      linkedin,
      twitter,
      frontmatter: data,
      markdownBody: content,
    },
  };
}
