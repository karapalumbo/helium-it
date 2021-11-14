import ComingSoon from "../components/ComingSoon";
// import HeadingDropDown from "../components/HeadingDropDown";
import { Flex, Heading, Text, Container, Box, Stack } from "@chakra-ui/react";

import "./CryptoMining.css";

export default function CryptoMiningSection() {
  return (
    <Box id="crypto-mining" paddingTop={"80px"}>
      <Container as={Stack} maxW="container.lg">
        <Flex flex={1} align={"center"} justify={"center"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text color={"#ffffff"} as={"span"}>
              Mining Consulting and Setup
            </Text>
            {""}
          </Heading>
        </Flex>
        <ComingSoon />;
        <Container p={4} as={Stack} maxW="container.lg" py={10}>
          <Flex flex={1}>
            <Text color={"#ffffff"} maxW="container.sm" className="mining-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text color={"#ffffff"} maxW="container.sm" className="mining-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Flex>
        </Container>
      </Container>
    </Box>
  );
}
