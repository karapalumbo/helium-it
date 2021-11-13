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
    <Box id="about">
      <Container p={4} as={Stack} maxW="container.lg" py={10}>
        <Flex p={4} flex={1} justify={"center"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text color={"#ffffff"} as={"span"}>
              Helping to XYZ
            </Text>
          </Heading>
        </Flex>
        <Flex p={4} flex={4}>
          <Stack spacing={2} w={"full"} maxW={"lg"}>
            <Heading color={"#ffffff"} as={"span"} fontSize={{ base: "2xl" }}>
              Our mission
            </Heading>
            <Text color={"#ffffff"} as={"span"} fontSize={{ base: "16" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            {/* <Flex color={"#ffffff"}>
              <div>IMAGE OF YOU HERE</div>
            </Flex> */}
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
