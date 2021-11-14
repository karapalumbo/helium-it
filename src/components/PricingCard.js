import React from "react";
import {
  Box,
  HStack,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  useDisclosure,
} from "@chakra-ui/react";

import { FaCheckCircle } from "react-icons/fa";
import PrimaryButton from "../components/PrimaryButton";
import ContactModal from "../components/ContactModal";

function PriceWrapper({ children }) {
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

const PricingCard = ({
  pricingTitle,
  price,
  rate,
  listOfPricingDetails,
  ...elemProps
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
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
            bg={useColorModeValue("#00b9ae")}
            px={3}
            py={1}
            color={useColorModeValue("gray.900", "gray.300")}
            fontSize="sm"
            fontWeight="600"
            rounded="xl"
          >
            {pricingTitle}
          </Text>
        </Box>
        <Box py={4} px={12}>
          <Text fontWeight="500" fontSize="2xl"></Text>
          <HStack justifyContent="center">
            <Text fontSize="3xl" fontWeight="600" color="white">
              $
            </Text>
            <Text fontSize="5xl" fontWeight="900" color="white">
              {price}
            </Text>
            <Text fontSize="3xl" color="white">
              {rate}
            </Text>
          </HStack>
        </Box>

        <VStack
          bg={useColorModeValue("gray.50", "gray.700")}
          py={4}
          borderBottomRadius={"xl"}
        >
          <List spacing={3} textAlign="start" px={12}>
            {listOfPricingDetails.map((item) => {
              return (
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  {item}
                </ListItem>
              );
            })}
          </List>
          <Box w="80%" pt={7}>
            <PrimaryButton text="Contact Us" onClick={handleClick} />
            <ContactModal isOpen={isOpen} onClose={onClose} />
          </Box>
        </VStack>
      </Box>
    </PriceWrapper>
  );
};

export default PricingCard;
