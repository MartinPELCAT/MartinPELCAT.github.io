import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="antialiased min-h-screen font-Poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
