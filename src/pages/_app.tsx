import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import AppBar from "../../components/AppBar";
import InitUser from "../../components/InitUser";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AppBar />
      <InitUser />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
