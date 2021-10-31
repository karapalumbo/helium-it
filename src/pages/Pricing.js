import { Box, Stack, Heading, VStack } from "@chakra-ui/react";

import PricingCard from "../components/PricingCard";

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
      </Box>
    </Stack>
  );
}

export default Pricing;
