import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { Stack, Flex, Heading, Spacer, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
const Header: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [gitTheme, setGitTheme] = useState(isDark ? "tokyonight" : "default");
  useEffect(() => {
    console.log(gitTheme);
    isDark ? setGitTheme("tokyonight") : setGitTheme("default");
  }, [colorMode]);

  const redirectToGithub = () => {
    window.open("https://github.com/prabincankod", "_blank");
  };
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=prabincankod&show_icons=true&theme=${gitTheme}`;
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="4" size="md" fontWeight="semibold" color="teal.400">
          prabincankod
        </Heading>

        <Spacer></Spacer>
        <IconButton
          ml={2}
          aria-label="github"
          icon={<FaGithub />}
          isRound={true}
          onClick={redirectToGithub}
        ></IconButton>
        <IconButton
          ml={8}
          aria-label="themeToggler"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Image
        src="https://avatars.githubusercontent.com/u/42871240?v=4"
        borderRadius="full"
        boxSize="90px"
      />
      <Heading
        size="lg"
        fontWeight="semibold"
        color={isDark ? "cyan.400" : "teal.400"}
      >
        Prabin Subedi
      </Heading>
      <Image src={statsUrl} />
    </VStack>
  );
};
export default Header;
