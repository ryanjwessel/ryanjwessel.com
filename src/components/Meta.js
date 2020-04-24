import Head from "next/head";
import base64Favicon from "../../public/favicon";

export default function Meta(props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{props.siteTitle}</title>
      <meta name="Description" content={props.description}></meta>
      <link rel="shortcut icon" type="image/x-icon" href={base64Favicon} />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
