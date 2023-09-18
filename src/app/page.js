"use client"
import { ThemeProvider } from "next-themes";
import Components from "./components/Page";

function Home({ pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Components {...pageProps} />
    </ThemeProvider>
  );
}

export default Home