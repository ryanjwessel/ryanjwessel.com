import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogList = ({ allBlogs }) => {
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
        {allBlogs.length > 0 &&
          allBlogs.map((post) => (
            <li className="post">
              <div className="post-info">
                <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
                  <a>
                    <h2 className="post-title"># {post.frontmatter.title}</h2>
                  </a>
                </Link>
                <h3 className="post-date">
                  *{reformatDate(post.frontmatter.date)}*
                </h3>
                <div className="post-summary">
                  <ReactMarkdown source={truncateSummary(post.markdownBody)} />
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
          div.post-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 1.5rem 1.25rem;
            border-bottom: 0.5px solid #06070a;
          }
          h2.post-title {
            margin-bottom: 0.5rem;
          }
          h3.post-date {
            margin-bottom: 1rem;
            font-style: italic;
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
