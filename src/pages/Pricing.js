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
          pricingTitle="Special"
          price={150}
          rate="Flat Rate"
          listOfPricingDetails={[
            "Unlimited build minutes.",
            "Lorem, ipsum dolor.",
            "5GB lorem, ipsum dolor.",
          ]}
        />
        <PricingCard
          pricingTitle="Pro"
          price={175}
          rate="Flat Rate"
          listOfPricingDetails={[
            "Unlimited build minutes.",
            "Lorem, ipsum dolor.",
            "5GB lorem, ipsum dolor.",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum dolor.",
          ]}
        />
      </Stack>
    </Box>
  );
}

export default Pricing;
