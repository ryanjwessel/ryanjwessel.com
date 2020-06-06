import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import CodeBlockRenderer from "../../components/renderers/CodeBlockRenderer";
const glob = require("glob");

const BlogTemplate = ({
  frontmatter,
  headline,
  description,
  github,
  linkedin,
  twitter,
  markdownBody,
}) => {
  const { title, date, codesample } = frontmatter;
  const readableDate = new Date(date).toDateString();

  return (
    <Layout
      pathname="/"
      title={title}
      headline={headline}
      description={description}
      github={github}
      linkedin={linkedin}
      twitter={twitter}
    >
      <article>
        <h1>{title}</h1>
        <h3>{readableDate}</h3>
        {codesample && (
          <h5>
          <a href={codesample} alt="Example Code URL" target="_blank" rel="noreferrer noopener">Example code for this post</a>
          </h5>
        )}
        <div>
          <ReactMarkdown
            source={markdownBody}
            renderers={{ code: CodeBlockRenderer }}
          />
        </div>
      </article>
    </Layout>
  );
};

export default BlogTemplate;

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const post = await import(`../../posts/${slug}.md`);
  const { title, headline, github, linkedin, twitter } = await import(
    `../../data/config.json`
  );
  const { data, content } = matter(post.default);

  return {
    props: {
      headline,
      github,
      linkedin,
      twitter,
      frontmatter: data,
      markdownBody: content,
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
