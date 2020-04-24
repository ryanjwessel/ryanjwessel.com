import { useRouter } from "next/router";
import StyledFooter from "./StyledFooter";
import Icons from "../icons";

const Footer = () => {
  const router = useRouter();

  return (
    <StyledFooter>
      <div className="left">
        <Icons.Folder />
        <span>~{router.asPath}</span>
      </div>
      <div className="right">
        <a
          className="icon-link"
          href="https://www.linkedin.com/in/ryanjwessel/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icons.LinkedIn />
        </a>
        <a
          className="icon-link"
          href="https://twitter.com/wesselstudios"
          target="_blank"
          rel="noreferrer noopener"
        ></a>
        <Icons.Twitter />
      </div>
    </StyledFooter>
  );
};

export default Footer;
