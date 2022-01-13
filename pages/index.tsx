import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prabin Subedi:writes alot of javascript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
};

export default Home;
