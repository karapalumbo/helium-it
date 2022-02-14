import { Flex, Heading, Text, Container, Box, Stack } from "@chakra-ui/react";

const Crypto101Section = () => {
  return (
    <Box id="crypto-101" pt={"50px"} pb={"50px"}>
      <Container
        as={Stack}
        maxW="container.lg"
        className="crypto-101-container"
        position="relative"
      >
        <Flex flex={1} align={"center"} justify={"flex-start"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text color={"#ffffff"} as={"span"} className="crypto-101-header">
              Basic Crypto 101
            </Text>{" "}
          </Heading>
        </Flex>

        <Flex flex={1}>
          <Heading fontSize={{ base: "xl" }} mt={"25px"}>
            <Text
              color={"#3499cc"}
              maxW="container.sm"
              className="what-is-crypto"
            >
              What is cryptocurrency?
            </Text>
          </Heading>
        </Flex>
        <Flex>
          <Text color={"#ffffff"} maxW="container.sm" className="consult-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Flex>

        <Flex flex={1}>
          <Heading fontSize={{ base: "xl" }} mt={"25px"}>
            <Text
              color={"#3499cc"}
              maxW="container.sm"
              className="what-is-crypto"
            >
              Why is it important?
            </Text>
          </Heading>
        </Flex>
        <Flex>
          <Text color={"#ffffff"} maxW="container.sm" className="consult-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Crypto101Section;
