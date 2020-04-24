import Link from "next/link";
import { kebabCase } from "lodash";
import StyledBlogList from "./StyledBlogList";

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
    <StyledBlogList>
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
            <li className="post" key={post.frontmatter.title}>
              <div className="post-info">
                <h2 className="post-title">
                  <Link
                    key={post.slug}
                    href={{ pathname: `/blog/[slug]` }}
                    as={{ pathname: `/blog/${post.slug}` }}
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
    </StyledBlogList>
  );
};

export default BlogList;
