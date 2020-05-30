import Header from "./Header";
import Meta from "./Meta";
import StyledLayout from "./StyledLayout";
import Footer from "./Footer";

const Layout = ({
  title,
  headline,
  description,
  github,
  linkedin,
  twitter,
  children,
}) => {
  return (
    <StyledLayout>
      <Meta title={title} description={description} />
      <Header headline={headline} />
      <div className="content">{children}</div>
      <Footer github={github} linkedin={linkedin} twitter={twitter} />
    </StyledLayout>
  );
};

export default Layout;
