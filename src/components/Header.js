import Link from "next/link";
import StyledTerminalIcon from "./StyledTerminalIcon";
import StyledHeader from "./StyledHeader";

export default function Header(props) {
  return (
    <StyledHeader>
      <Link href="/">
        <nav className="nav" role="navigation" aria-label="main navigation">
          <StyledTerminalIcon>>_</StyledTerminalIcon>
          <h1>{props.headline}</h1>
        </nav>
      </Link>
    </StyledHeader>
  );
}
