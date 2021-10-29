import { Button } from "@chakra-ui/react";

const PrimaryButton = ({ text }) => {
  return (
    <Button
      color="white"
      variant="solid"
      bg="#0B0E3F"
      marginTop="3"
      type="submit"
      width="100%"
      _hover={{ bg: "#1A365D" }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
