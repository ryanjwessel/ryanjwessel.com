import Link from "next/link";
import StyledHeader from "./StyledHeader";
import StyledAvatar from "./StyledAvatar";

export default function Header(props) {
  return (
    <StyledHeader>
      <div className="left">
        <Link href="/">
          <nav className="nav" role="navigation" aria-label="main navigation">
            <a>
              <StyledAvatar
                src="/animoji.png"
                alt="Ryan's Animoji with a blue background"
              />
              <h1>{props.headline}</h1>
            </a>
          </nav>
        </Link>
      </div>
    </StyledHeader>
  );
}
