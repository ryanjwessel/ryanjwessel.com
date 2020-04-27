import { useRouter } from "next/router";
import Link from "next/link";
import StyledFooter from "./StyledFooter";
import Icon from "./icons/Icon";

const Footer = ({ github, linkedin, twitter }) => {
  const { asPath } = useRouter();
  const currentPath = `~${asPath}${asPath === "/" ? "" : ".md"}`;

  return (
    <StyledFooter>
      <div className="left">
        <Link href="/">
          <a className="icon-link">
            <Icon.Home />
          </a>
        </Link>
        <span>{currentPath}</span>
      </div>
      <div className="right">
        <Link href="/info">
          <a className="icon-link">
            <Icon.About />
          </a>
        </Link>
        <a
          className="icon-link"
          href={github}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon.GitHub />
        </a>
        <a
          className="icon-link"
          href={linkedin}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon.LinkedIn />
        </a>
        <a
          className="icon-link"
          href={twitter}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon.Twitter />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
