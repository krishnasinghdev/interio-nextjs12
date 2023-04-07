import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <div id="modal" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
