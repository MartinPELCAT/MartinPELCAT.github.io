import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { UserContextProvider } from "../contexts/UserContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserContextProvider>
      <Component {...pageProps} />;
    </UserContextProvider>
  );
};

export default App;
