import { Box, Stack, Heading, VStack, Text } from "@chakra-ui/react";

import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <Box id="pricing" pt={"40px"}>
      <VStack textAlign="center">
        <Heading
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          mb={5}
          mt={10}
          color="#ffffff"
        >
          A plan to meet your crypto needs.
        </Heading>
        {/* <Text fontSize="lg" color={"gray.500"}>
          We offer consultations between 15-30 minute increments to learn the
          basics of crypto!
        </Text> */}
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 10 }}
        py={30}
      >
        <PricingCard
          pricingTitle="IT Support"
          price={150}
          rate="Hourly"
          listOfPricingDetails={[
            "Specialized for your business.",
            "Personal IT support/consulting.",
          ]}
        />
        <PricingCard
          pricingTitle="Crypto 101"
          price={150}
          rate="Hourly"
          listOfPricingDetails={[
            "Learn the basics of Crypto.",
            "1:1 walk through and setup.",
            "15-30 min consultations",
          ]}
        />
        <PricingCard
          pricingTitle="Consultation"
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
};

export default Pricing;
