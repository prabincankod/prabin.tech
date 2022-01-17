import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Body from "../components/Body";
import { useColorMode } from "@chakra-ui/react";
const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
      <Head>
        <title>Prabin Subedi:writes alot of javascript</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Prabin Subedi:writes alot of javascript"
        />
        <meta name="theme-color" content={isDark ? "#1A202C" : "#FFF"} />
      </Head>
      <Header />
      <Body />
    </>
  );
};

export default Home;
