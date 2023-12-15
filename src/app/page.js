"use client"
import { ThemeProvider } from "next-themes";
import Components from "./components/Page";

function Home({ }) {
  return (
    <ThemeProvider attribute="class">
      <Components />
      
    </ThemeProvider>
  );
}

export default Home