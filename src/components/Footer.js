import { useRouter } from "next/router";
import Link from "next/link";
import StyledFooter from "./StyledFooter";
import Icons from "../icons";

const Footer = ({ linkedin, twitter }) => {
  const { asPath } = useRouter();
  let currentPath = `~${asPath}.md`;
  if (asPath === "/") {
    currentPath = currentPath.replace(".md", "");
  }

  return (
    <StyledFooter>
      <div className="left">
        <Link href="/">
          <a className="icon-link">
            <Icons.Home />
          </a>
        </Link>
        <span>{currentPath}</span>
      </div>
      <div className="right">
        <a
          className="icon-link"
          href={linkedin}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icons.LinkedIn />
        </a>
        <a
          className="icon-link"
          href={twitter}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icons.Twitter />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
