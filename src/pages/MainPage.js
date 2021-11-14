import React from "react";
import "./MainPage.css";

import ITSupportSection from "./ITSupport";
import Crypto101Section from "./Crypto101";
import About from "./About";

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Container,
  Link,
} from "@chakra-ui/react";

export default function MainPage() {
  return (
    <>
      <Container maxW="container.lg">
        <Stack
          paddingTop={"80px"}
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
                <Text color={"#00b9ae"} as={"span"}>
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
                <Button rounded={"full"}>
                  <Link href="/pricing">How It Works</Link>
                </Button>
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
      <div>
        <About />
        <ITSupportSection />
        <Crypto101Section />
      </div>
    </>
  );
}
