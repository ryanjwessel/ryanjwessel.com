import Link from "next/link";

export default function Header(props) {
  return (
    <header className="header">
      <nav className="nav" role="navigation" aria-label="main navigation">
        <Link href="/">
          <h1>{props.headline}</h1>
        </Link>
        {/* <div>
          <Link
            href={`${
              typeof window !== "undefined" &&
              window.location.pathname == "/info"
                ? "/"
                : "/info"
            }`}
          >
            <h1>{`${
              typeof window !== "undefined" &&
              window.location.pathname == "/info"
                ? "close"
                : "info"
            }`}</h1>
          </Link>
        </div> */}
      </nav>
      <style jsx>
        {`
          h1 {
            font-size: 24px;
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
            border-bottom: 0.5px solid #06070a;
          }
        `}
      </style>
    </header>
  );
}
