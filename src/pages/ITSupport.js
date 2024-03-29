import ComingSoon from "../components/ComingSoon";
import { Flex, Heading, Text, Container, Stack, Box } from "@chakra-ui/react";

const ITSupportSection = () => {
  return (
    <Box id="IT-support" bg="#f6f9fc" pt={"50px"} pb={"50px"}>
      <Container as={Stack} maxW="container.lg">
        <Flex flex={1} align={"center"} justify={"flex-start"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"}>IT Support</Text>{" "}
          </Heading>
        </Flex>
        <ComingSoon />;
      </Container>
    </Box>
  );
};

export default ITSupportSection;
