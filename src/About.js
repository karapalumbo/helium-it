import React from "react";
import "./About.css";

//         {/* <img
//           className="img-banner"
//           src="https://images.unsplash.com/photo-1536834733795-ce0e31e99a58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2833&q=80"
//           alt="Green neon lights"
//         ></img> */}

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              CRYPTO.
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Welcome to the future.
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Helium IT LLC was founded to educate and integrate crypto currencies
            into daily life to help offset the costs of monthly recurring
            services by leveraging hardware and software solutions.{" "}
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button rounded={"full"}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"geometric square shapes"}
          objectFit={"cover"}
          src={
            // "https://images.unsplash.com/photo-1612696874005-d015469bc660?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
            "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
