import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head />
        <body className="antialiased text-primary bg-light-gray overflow-y-scroll">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
