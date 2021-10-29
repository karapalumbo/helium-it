import { ReactNode, React } from "react";
import Pricing from "./Pricing";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import heliumLogoLight from "./images/heliumITLogoLight.png";

const Logo = (props: any) => {
  return <Image maxWidth="120px" src={heliumLogoLight} />;
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container p={4} as={Stack} maxW="container.lg" py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={4}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>
              © 2021 Helium IT, LLC. All rights reserved
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Services</ListHeader>
            <Link href={"#"}>Overview</Link>
            <Link href={"/pricing"}>Pricing</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"https://discord.gg/ZjugCrUvza"}>Discord</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
