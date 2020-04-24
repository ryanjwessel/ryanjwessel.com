import Header from "./Header";
import Meta from "./Meta";
import StyledLayout from "./StyledLayout";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <StyledLayout>
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <Header headline={props.headline} />
      <div className="content">{props.children}</div>
      <Footer twitter={props.twitter} linkedin={props.linkedin} />
    </StyledLayout>
  );
}
