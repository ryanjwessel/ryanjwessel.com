import Header from "./Header";
import Meta from "./Meta";

export default function Layout(props) {
  return (
    <section className="layout">
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <Header headline={props.headline} />
      <div className="content">{props.children}</div>
      <style jsx>
        {`
          .layout {
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .content {
            flex-grow: 1;
            max-width: 800px;
            margin: 0 auto;
          }
        `}
      </style>
    </section>
  );
}
