"use client"
import { ThemeProvider } from "next-themes";
import Components from "./components/Page";

export default function Home({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Components {...pageProps} />
    </ThemeProvider>
  );
}
