import { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { UserContextProvider } from "../contexts/UserContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserContextProvider>
      <Head>
        <title>Portfolio | Martin PELCAT</title>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="Portfolio de Martin PELCAT" name="description" />
        <meta content="text/html;charset=UTF-8" httpEquiv="Content-Type" />
        <meta content="index,follow" name="robots" />
        <meta content="Martin PELCAT" name="author" />
        <meta
          content="-Ev6kFtDdzJY-h36VT0R4VoQzRz1Pdzj4oa6kCVPUHU"
          name="google-site-verification"
        />
        <meta
          content="React, Martin PELCAT, Martin, PELCAT, Portfolio"
          name="keywords"
        />
        <link href="http://www.github.com" rel="preconnect" />
        <link href="https://image.flaticon.com" rel="preconnect" />
        <link href="https://upload.wikimedia.org" rel="preconnect" />
        <link href="https://www.github.com" rel="preconnect" />
        <link href="https://github.com" rel="preconnect" />
        <link href="https://avatars1.githubusercontent.com" rel="preconnect" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </UserContextProvider>
  );
};

export default App;
