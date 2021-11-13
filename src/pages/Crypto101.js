import ComingSoon from "../components/ComingSoon";
import {
  Flex,
  Heading,
  Text,
  Container,
  Box,
  Stack,
  Image,
} from "@chakra-ui/react";

import "./Crypto101.css";

export default function Crypto101Section() {
  return (
    <Box id="crypto-101">
      <Container
        as={Stack}
        maxW="container.lg"
        className="crypto-101-container"
      >
        <Flex p={4} flex={1} align={"center"} justify={"center"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text color={"#ffffff"} as={"span"} className="crypto-101-header">
              Basic Crypto 101
            </Text>{" "}
          </Heading>
        </Flex>
        <Flex flex={1}>
          <Image
            className="crypto-coins-img"
            alt={"image of 3 crypto coins"}
            objectFit={"cover"}
            src={
              "https://cdn.pixabay.com/photo/2018/05/23/04/32/cryptocurrency-3423264_1280.jpg"
            }
          />
        </Flex>
      </Container>
    </Box>
  );
}
