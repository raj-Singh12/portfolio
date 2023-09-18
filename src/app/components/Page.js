
import Head from "next/head";
import Header from "./Header/Page";
import Details from "./Details/Page";
import Banner from "./Banner/Page";

export default function Components() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Gerenal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col justify-between">
        <Header />
        <Banner />
        <Details />
      </main>
    </div>
  );
}
