import { ReactNode } from "react";

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { FaCheckCircle } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

function Pricing() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      textAlign="center"
      justify="center"
      spacing={{ base: 4, lg: 10 }}
      py={10}
    >
      <Box py={12}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" mb={10} fontSize="4xl" color="white">
            One rate for all of your needs.
          </Heading>
        </VStack>
        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("teal.300", "teal.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Special
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl"></Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600" color="white">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900" color="white">
                  150
                </Text>
                <Text fontSize="3xl" color="white">
                  flat rate
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <PrimaryButton text="Contact us" />
                {/* <ContactModal /> */}
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
      </Box>
    </Stack>
  );
}

export default Pricing;
