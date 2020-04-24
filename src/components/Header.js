import Link from "next/link";
import StyledTerminalIcon from "./StyledTerminalIcon";

export default function Header(props) {
  return (
    <header className="header">
      <nav className="nav" role="navigation" aria-label="main navigation">
        <Link href="/">
          <h1>
            <StyledTerminalIcon>>_</StyledTerminalIcon>
            {props.headline}
          </h1>
        </Link>
      </nav>
      <style jsx>
        {`
          h1 {
            font-size: 1rem;
            margin-bottom: 0;
          }
          h1:hover {
            cursor: pointer;
          }
          nav {
            padding: 1rem 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </header>
  );
}
