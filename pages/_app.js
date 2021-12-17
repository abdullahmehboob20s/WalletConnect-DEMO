import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MoralisProvider
        appId={"HAX80c1UDMKsz6IseMu1AtxDgGyUWTCuNFPTQLsz"}
        serverUrl={"https://qcyk5ps3uuqb.usemoralis.com:2053/server"}
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </>
  );
}

export default MyApp;
