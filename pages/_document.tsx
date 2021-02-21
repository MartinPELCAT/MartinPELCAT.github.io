import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="antialiased text-primary bg-light-gray">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
