import React from "react";
import "./About.css";

import ITSupportSection from "./ITSupport";
import CryptoMiningSection from "./CryptoMining";
import Crypto101Section from "./Crypto101";

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Container,
} from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Container maxW="container.lg">
        <Stack
          paddingTop={"60px"}
          marginBlockEnd={"60px"}
          direction={{ base: "column", md: "row" }}
        >
          <Flex p={4} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text as={"span"} color={"#3499cc"}>
                  Crypto
                </Text>
                <br />{" "}
                <Text color={"#5ec3b5"} as={"span"}>
                  Welcome to the Future.
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"#c2d6f3"}>
                Helium IT LLC was founded to educate and integrate crypto
                currencies into daily life to help offset the costs of monthly
                recurring services by leveraging hardware and software
                solutions.{" "}
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button rounded={"full"}>How It Works</Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              className="phone-stock-img"
              alt={"phone showing stocks"}
              objectFit={"cover"}
              src={
                "https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }
            />
          </Flex>
        </Stack>
      </Container>
      {/* <div>
        <hr></hr>
        <ITSupportSection />
        <hr></hr>
        <CryptoMiningSection />
        <hr></hr>
        <Crypto101Section />
      </div> */}
    </>
  );
}
