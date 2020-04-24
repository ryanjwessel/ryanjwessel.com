import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";
const glob = require("glob");

export default function BlogTemplate(props) {
  const readableDate = new Date(props.frontmatter.date).toDateString();
  return (
    <Layout
      pathname="/"
      siteTitle={props.title}
      headline={props.headline}
      siteDescription={props.description}
      github={props.github}
      linkedin={props.linkedin}
      twitter={props.twitter}
    >
      <article>
        <h1>{props.frontmatter.title}</h1>
        <h3>{readableDate}</h3>
        <div>
          <ReactMarkdown
            source={props.markdownBody}
            renderers={{ code: CodeBlock }}
          />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../posts/${slug}.md`);
  const config = await import(`../../data/config.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      headline: config.headline,
      frontmatter: data.data,
      markdownBody: data.content,
      github: config.github,
      linkedin: config.linkedin,
      twitter: config.twitter,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync("src/posts/**/*.md");

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) =>
    file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim()
  );

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
