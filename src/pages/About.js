import ComingSoon from "../components/ComingSoon";
import {
  Flex,
  Heading,
  Text,
  Container,
  Stack,
  Box,
  UnorderedList,
  ListItem,
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
              To introduce individuals and businesses to blockchain technology
              by using a hands on approach to education and integration.
            </Text>
          </Stack>

          <Stack spacing={2} w={"full"} maxW={"lg"} mt={5}>
            <Heading as={"span"} fontSize={{ base: "2xl" }} color="#00b9ae">
              Core Values
            </Heading>
            <Text as={"span"} fontSize={{ base: "16" }}>
              {" "}
              <UnorderedList>
                <ListItem>
                  Treat everyone like they are your loving grandmother{" "}
                </ListItem>
                <ListItem>Big Rick Energy</ListItem>
                <ListItem>Honest, transparent communication</ListItem>
                <ListItem>Passion for continued education</ListItem>
                <ListItem>Be proud of progress</ListItem>
              </UnorderedList>
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
