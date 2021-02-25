import { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { LanguageContextProvider } from "../contexts/LanguageContext";
import { UserContextProvider } from "../contexts/UserContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <LanguageContextProvider>
      <UserContextProvider>
        <Head>
          <meta charSet="UTF-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>Portfolio | Martin PELCAT</title>
          <meta content="Portfolio de Martin PELCAT" name="description" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="Martin PELCAT" name="author" />
          <meta content="index,follow" name="robots" />
          <meta name="theme-color" content="#fff" />
          <meta
            content="-Ev6kFtDdzJY-h36VT0R4VoQzRz1Pdzj4oa6kCVPUHU"
            name="google-site-verification"
          />
          <meta
            content="React, Martin PELCAT, Martin, PELCAT, Portfolio"
            name="keywords"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
        </Head>
        <Component {...pageProps} />
      </UserContextProvider>
    </LanguageContextProvider>
  );
};

export default App;
