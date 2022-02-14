import { Flex, Heading, Text, Container, Box, Stack } from "@chakra-ui/react";
import ConsultCard from "../components/ConsultCard";
import { BsLaptop } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
import { AiOutlineMonitor } from "react-icons/ai";

import "./CryptoConsult.css";

const consultItems = [
  {
    icon: <BiSupport className="icon" />,
    heading: "Basic Insight Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: <BsLaptop className="icon" />,
    heading: "Computer Setup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: <FaNetworkWired className="icon" />,
    heading: "Network Setup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: <AiOutlineMonitor className="icon" />,
    heading: "Computer Monitoring",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
  },
];

const CryptoConsultSection = () => {
  return (
    <>
      <Box id="crypto-consult" paddingTop={"70px"} height="80vh">
        <Container as={Stack} maxW="container.xl">
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
              {consultItems.map((consultItem) => {
                return (
                  <ConsultCard
                    icon={consultItem.icon}
                    heading={consultItem.heading}
                    description={consultItem.description}
                  />
                );
              })}
            </Flex>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default CryptoConsultSection;
