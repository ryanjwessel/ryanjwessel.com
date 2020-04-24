import Link from "next/link";
import StyledTerminalIcon from "./StyledTerminalIcon";
import StyledHeader from "./StyledHeader";

export default function Header(props) {
  return (
    <StyledHeader>
      <div className="left">
        <Link href="/">
          <nav className="nav" role="navigation" aria-label="main navigation">
            <StyledTerminalIcon>>_</StyledTerminalIcon>
            <h1>{props.headline}</h1>
          </nav>
        </Link>
      </div>
      <div className="right">
        {/* TODO: Add theme toggle for light/dark */}
        <p />
      </div>
    </StyledHeader>
  );
}
