import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prabin Subedi:writes alot of javascript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />
    </>
  );
};

export default Home;
