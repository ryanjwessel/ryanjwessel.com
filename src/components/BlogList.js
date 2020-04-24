import React, { useState, useEffect } from "react";
import Link from "next/link";
import { kebabCase } from "lodash";
import StyledBlogList from "./StyledBlogList";

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

  // TODO: Clean-up janky implementation for animating.
  // TODO: Add cursor display.
  // TODO: Only run animation on first vist.
  // TODO: Support replaying of animation.
  const textIndex =
    animationCursor[0] === 0 ? animationCursor[1] : bashCommand[0].length;

  const secondIndex =
    animationCursor[0] === 1 ? animationCursor[1] : bashCommand[1].length;

  const thirdIndex =
    animationCursor[0] === 2 ? animationCursor[1] : bashCommand[2].length;

  return (
    <StyledBlogList>
      <>
        <p className="terminal-loop">
          <strong>(~/ryan-wessel) $ </strong>
          {animationCursor[1] > 0 && (
            <span>{bashCommand[0].slice(0, textIndex)}</span>
          )}
          <br />
          {animationCursor[0] >= 1 && (
            <span className="indent">
              {bashCommand[1].slice(0, secondIndex)}
            </span>
          )}
          <br />
          {animationCursor[0] >= bashCommand.length - 1 && (
            <span>{bashCommand[2].slice(0, thirdIndex)}</span>
          )}
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
