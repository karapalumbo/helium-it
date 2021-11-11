import { Box, Stack, Heading, VStack, Text } from "@chakra-ui/react";

import PricingCard from "../components/PricingCard";

function Pricing() {
  return (
    <Box py={12} pt={"60px"}>
      <VStack spacing={2} textAlign="center">
        <Heading mt="20px" as="h1" fontSize="4xl" color="white">
          A plan to meet your crypto needs
        </Heading>
        {/* <Text fontSize="lg" color={"gray.500"}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text> */}
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PricingCard
          pricingTitle="IT Support"
          price={150}
          rate="Hourly"
          listOfPricingDetails={[
            "Specialized for your business.",
            "Personal IT support and consulting.",
          ]}
        />
        <PricingCard
          pricingTitle="Basic Crypto 101"
          price={150}
          rate="Hourly"
          listOfPricingDetails={[
            "Learn the basics of Crypto.",
            "1:1 walk through and setup.",
          ]}
        />
        <PricingCard
          pricingTitle="Crypto Mining"
          price={150}
          rate="Hourly"
          listOfPricingDetails={[
            "Custom built devices.",
            "Dedicated device setup.",
          ]}
        />
      </Stack>
    </Box>
  );
}

export default Pricing;
