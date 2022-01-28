import ComingSoon from "../components/ComingSoon";
// import HeadingDropDown from "../components/HeadingDropDown";
import { Flex, Heading, Text, Container, Box, Stack } from "@chakra-ui/react";
import ConsultCard from "../components/ConsultCard";
import "./CryptoConsult.css";

export default function CryptoConsultSection() {
  return (
    <>
      <Box id="crypto-consult" paddingTop={"70px"}>
        <Container as={Stack} maxW="container.lg">
          <Flex flex={1} align={"center"} justify={"center"}>
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              mb={30}
              color="#ffffff"
            >
              <Text color={"#ffffff"} as={"span"}>
                Crypto Consulting and Setup
              </Text>
              {""}
            </Heading>
          </Flex>
          <Stack p={4} maxW="container.lg">
            <Flex flex={1}>
              <ConsultCard
                heading={"Basic Insight Support"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."
                }
              />
              <ConsultCard
                heading={"Computer Setup"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."
                }
              />
              <ConsultCard
                heading={"Network Setup"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."
                }
              />
              <ConsultCard
                heading={"Computer Monitoring"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."
                }
              />
            </Flex>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
