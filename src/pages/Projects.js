import {
  Flex,
  Heading,
  Text,
  Container,
  Stack,
  Box,
  Link,
  Divider,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Projects() {
  return (
    <Box id="Projects" bg="#f6f9fc" pt={"80px"}>
      <Container maxW="container.lg">
        <Flex flex={1} align={"center"} justify={"flex-start"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mb={30}>
            <Text as={"span"}>Projects We're Supporting</Text>{" "}
          </Heading>
        </Flex>
        <Heading fontSize={{ base: "md" }}>
          <Link href="https://www.helium.com/" isExternal>
            Helium <ExternalLinkIcon mx="2px" />
          </Link>
        </Heading>

        <Text color={"#000000"} maxW="container.sm" className="consult-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </Container>
      <Divider />
    </Box>
  );
}
