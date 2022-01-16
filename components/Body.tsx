import { Heading, Image, VStack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useState, useEffect } from "react";
const Body = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [gitTheme, setGitTheme] = useState(isDark ? "tokyonight" : "default");
  useEffect(() => {
    console.log(statsUrl);
    isDark ? setGitTheme("tokyonight") : setGitTheme("default");
  }, [colorMode]);

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=prabincankod&show_icons=true&theme=${gitTheme}&hide_border=true&bg_color=${
    isDark ? "1A202C" : "FFF"
  }&hide_rank=true`;

  const streaksUrl = `https://github-readme-streak-stats.herokuapp.com/?user=prabincankod&theme=${gitTheme}&hide_border=true&background=${
    isDark ? "1A202C" : "FFF"
  }`;
  return (
    <VStack p={5}>
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
      <Image src={streaksUrl} />
    </VStack>
  );
};
export default Body;
