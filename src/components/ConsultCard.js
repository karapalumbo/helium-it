import { Flex, Heading, Text, Container, Stack, Box } from "@chakra-ui/react";

const ConsultCard = ({ heading, description, icon }) => {
  return (
    <Box id="consultCard">
      <Container as={Stack} maxW="container.md">
        <Flex flex={1} align={"center"} justify={"flex-start"}>
          <Heading fontSize={{ base: "lg" }} color={"#ffffff"}>
            {icon}
            <Text as={"span"} color={"#3499cc"}>
              {heading}
            </Text>{" "}
          </Heading>
        </Flex>

        <Text color={"#ffffff"} maxW="container.sm" className="consult-info">
          {description}
        </Text>
      </Container>
    </Box>
  );
};

export default ConsultCard;
