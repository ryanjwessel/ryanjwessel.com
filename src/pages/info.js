import Layout from "../components/Layout";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function Info(props) {
  return (
    <Layout
      pathname="/info"
      siteTitle={props.title}
      headline={props.headline}
      siteDescription={props.description}
      github={props.github}
      linkedin={props.linkedin}
      twitter={props.twitter}
    >
      <section>
        <h1>{props.frontmatter.title}</h1>
        <ReactMarkdown source={props.markdownBody} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await import(`../data/info.md`);
  const config = await import(`../data/config.json`);
  const data = matter(content.default);

  return {
    props: {
      title: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
      headline: config.headline,
      description: config.description,
      github: config.github,
      linkedin: config.linkedin,
      twitter: config.twitter,
    },
  };
}
