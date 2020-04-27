import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { kebabCase } from "lodash";
import StyledBlogList from "./StyledBlogList";
import BlinkingCursor from "./BlinkingCursor";

const BlogList = ({ allBlogs }) => {
  const [animationCursor, setAnimationCursor] = useState([0, 0]);
  const [finishedAnimating, setFinishedAnimating] = useState(false);
  const convertTitleToKebabCase = (content) => `${kebabCase(content)}.md`;
  const truncateSummary = (content) => content.slice(0, 200).trimEnd();
  const reformatDate = (fullDate) => new Date(fullDate).toDateString();

  const bashCommand = [
    "for post in ./blog/*.md; do",
    "echo $post && head -c200 $post;",
    "done;",
  ];

  useEffect(() => {
    const cursorMovement = () => {
      const currLineIndex = animationCursor[0];
      const currCharIndex = animationCursor[1];
      // Increment to next line if there is another line and it is at the final character of the current line.
      if (
        currCharIndex === bashCommand[currLineIndex].length - 1 &&
        currLineIndex !== bashCommand.length - 1
      ) {
        setAnimationCursor([currLineIndex + 1, 0]);
        // Incremement to the next character as long as there is a next character.
      } else if (currCharIndex !== bashCommand[currLineIndex].length) {
        setAnimationCursor([currLineIndex, currCharIndex + 1]);
        // Stop the interval if we have completed animating.
      } else {
        clearInterval(cursorMovementTiming);
        setFinishedAnimating(true);
      }
    };

    const cursorMovementTiming = setInterval(cursorMovement, 50);
    return () => clearInterval(cursorMovementTiming);
  }, [animationCursor]);

  // TODO: Only run animation on first vist.
  // TODO: Support replaying of animation.

  const memoizedBashCommand = useMemo(
    () => bashCommand.slice(0, animationCursor[0] + 1),
    [animationCursor[0]]
  );

  const memoizedCommandsByLine = useMemo(() => {
    return memoizedBashCommand.map((line, i) => {
      if (i === animationCursor[0]) {
        return line.slice(0, animationCursor[1]);
      }
      return line;
    });
  }, [memoizedBashCommand, animationCursor[0], animationCursor[1]]);

  return (
    <StyledBlogList>
      <>
        <p className="terminal-loop">
          <strong>(~/ryan-wessel) $ </strong>
          {memoizedCommandsByLine.map((line, i) => {
            let cursor = null;
            if (i + 1 === memoizedCommandsByLine.length) {
              cursor = <BlinkingCursor />;
            }
            return (
              <React.Fragment key={i}>
                <span>
                  {line}
                  {cursor}
                </span>
              </React.Fragment>
            );
          })}
        </p>
        <ul className="list">
          {finishedAnimating &&
            allBlogs.length > 0 &&
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
      </>
    </StyledBlogList>
  );
};

export default BlogList;
