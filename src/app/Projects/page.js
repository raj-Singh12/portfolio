"use client";
import Head from "next/head";
import Header from "../components/Header/Page";
import Banner from "../components/Banner/Page";
import ProjectList from "../hoc/ProjectList/Page";

export default function Projects() {
  return (
    <>
      <div className="min-h-screen">
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="Gerenal" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col justify-between">
          <Header />
          <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex flex-wrap justify-center gap-5 overflow-hidden py-4 sm:gap-4">
              <ProjectList />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
