import Header from "./Header";
import Meta from "./Meta";
import StyledLayout from "./StyledLayout";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <StyledLayout>
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <Header headline={props.headline} />
      <div className="content">{props.children}</div>
      <Footer
        github={props.github}
        linkedin={props.linkedin}
        twitter={props.twitter}
      />
    </StyledLayout>
  );
};

export default Layout;
