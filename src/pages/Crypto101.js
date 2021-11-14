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

import bitcoinImg from "../images/bitcoinImg.png";
import ethereumImg from "../images/ethereumImg.png";
import litecoinImg from "../images/litecoinImg.png";

import "./Crypto101.css";

export default function Crypto101Section() {
  return (
    <Box id="crypto-101" pt={"50px"} pb={"50px"}>
      <Container
        as={Stack}
        maxW="container.lg"
        className="crypto-101-container"
      >
        <Flex flex={1} align={"center"} justify={"flex-start"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text color={"#ffffff"} as={"span"} className="crypto-101-header">
              Basic Crypto 101
            </Text>{" "}
          </Heading>
        </Flex>
        <Flex flex={1}>
          <ComingSoon />;
          {/* <Image
            className="crypto-coins-img"
            alt={"image of 3 crypto coins"}
            objectFit={"cover"}
            src={
              "https://cdn.pixabay.com/photo/2018/05/23/04/32/cryptocurrency-3423264_1280.jpg"
            }
          /> */}
          {/* <Image
            className="crypto-coins-img"
            objectFit={"cover"}
            alt={"image of bitcoin"}
            src={bitcoinImg}
            h={300}
          />
          <Image
            className="crypto-coins-img"
            objectFit={"cover"}
            alt={"image of ethereum"}
            src={ethereumImg}
            h={300}
          />
          <Image
            className="crypto-coins-img"
            objectFit={"cover"}
            alt={"image of litecoin"}
            src={litecoinImg}
            h={300}
          /> */}
        </Flex>
      </Container>
    </Box>
  );
}
