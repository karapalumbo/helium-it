import ComingSoon from "../components/ComingSoon";
import {
  Flex,
  Heading,
  Text,
  Container,
  Stack,
  Box,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box id="about" bg="white" pt={"50px"} pb={"50px"}>
      <Container as={Stack} maxW="container.lg">
        <Flex flex={1} justify={"flex-start"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"}>Expanding the Peoples Network</Text>
          </Heading>
        </Flex>

        <Flex flex={4}>
          <Stack spacing={2} w={"full"} maxW={"lg"} mt={5} pr={50}>
            <Heading as={"span"} fontSize={{ base: "2xl" }} color="#00b9ae">
              Our Mission
            </Heading>
            <Text as={"span"} fontSize={{ base: "16" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Stack>

          <Stack spacing={2} w={"full"} maxW={"lg"} mt={5}>
            <Heading as={"span"} fontSize={{ base: "2xl" }} color="#00b9ae">
              Why Us?
            </Heading>
            <Text as={"span"} fontSize={{ base: "16" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
