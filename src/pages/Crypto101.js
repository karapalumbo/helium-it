import ComingSoon from "../components/ComingSoon";
import { Flex, Heading, Text, Container, Box, Stack } from "@chakra-ui/react";

export default function Crypto101Section() {
  return (
    <Box>
      <Container p={4} as={Stack} maxW="container.lg" py={10}>
        <Flex
          p={4}
          flex={1}
          align={"center"}
          justify={"center"}
          id="crypto-101"
        >
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text color={"#ffffff"} as={"span"}>
              Basic Crypto 101
            </Text>{" "}
          </Heading>
        </Flex>
        <ComingSoon />;
      </Container>
    </Box>
  );
}
