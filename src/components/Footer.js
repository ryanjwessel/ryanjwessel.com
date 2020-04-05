import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Footer = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
  </div>
);

export default Footer;
