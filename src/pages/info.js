import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'src/components/Layout/Layout';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import LinkRenderer from 'src/components/_renderers/LinkRenderer';
import { frontmatterPropTypes } from 'src/propTypes';

const Info = ({
  title,
  headline,
  description,
  github,
  linkedin,
  twitter,
  youtube,
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
      youtube={youtube}
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
  frontmatter: frontmatterPropTypes,
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
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
    youtube,
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
      youtube,
      frontmatter: data,
      markdownBody: content,
    },
  };
}
