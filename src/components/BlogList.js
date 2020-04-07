import Link from "next/link";
import { kebabCase } from "lodash";

const BlogList = ({ allBlogs }) => {
  function convertTitleToKebabCase(content) {
    return `${kebabCase(content)}.md`;
  }
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  return (
    <>
      <ul className="list">
        <h2 className="terminal-loop">
          <span className="bold">(~/ryan-wessel) $ </span>
          for post in ./blog-posts/*.md; do
          <br />
          <span className="indent">echo $post && head -c200 $post;</span>
          <br />
          {`done; `}
        </h2>
        <span></span>
        {allBlogs.length > 0 &&
          allBlogs.map((post) => (
            <li className="post">
              <div className="post-info">
                <h2 className="post-title">
                  <Link
                    key={post.slug}
                    href={{ pathname: `/blog/${post.slug}` }}
                  >
                    <a>{convertTitleToKebabCase(post.frontmatter.title)}</a>
                  </Link>
                </h2>
                <h3 className="post-date">
                  {reformatDate(post.frontmatter.date)}
                </h3>
                <div className="post-summary">
                  {truncateSummary(post.markdownBody)}...
                </div>
              </div>
            </li>
          ))}
      </ul>
      <style jsx>
        {`
          margin-bottom: 0;

          li.post {
            display: flex;
            justify-content: center;
            flex-direction: column;
            min-height: 38vh;
            margin-bottom: 0;
          }
          h2.terminal-loop,
          div.post-info {
            padding: 1.5rem 1.25rem 0;
          }
          div.post-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          h2.terminal-loop,
          h2.post-title,
          h3.post-date,
          div.post-summary h2 {
            font-size: 1rem;
          }
          h2.post-title,
          h3.post-date,
          div.post-summary h2 {
            margin-bottom: 1rem;
          }
          .bold {
            font-weight: 600;
          }
          h2.terminal-loop span.indent {
            padding-left: 2rem;
          }
          @media (min-width: 1280px) {
            .post-info {
              padding: 3rem;
            }
            h3.post-date {
              margin-bottom: 1.2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default BlogList;
