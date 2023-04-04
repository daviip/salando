import { Header } from "@/components/Header";
import { NavBottom } from "@/components/NavBottom";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <NavBottom />
      </body>
    </Html>
  );
}
