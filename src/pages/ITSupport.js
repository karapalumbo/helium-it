import ComingSoon from "../components/ComingSoon";
import {
  Flex,
  Heading,
  Text,
  Container,
  Stack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ITSupportSection() {
  return (
    <Box>
      <Container p={4} as={Stack} maxW="container.lg" py={10}>
        <Flex
          p={4}
          flex={1}
          align={"center"}
          justify={"center"}
          id="IT-support"
        >
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text color={"#ffffff"} as={"span"}>
              IT Support and Consulting
            </Text>{" "}
          </Heading>
        </Flex>
        <ComingSoon />;
      </Container>
    </Box>
  );
}
