import { Button } from "@chakra-ui/react";

const PrimaryButton = ({ text, ...elemProps }) => {
  return (
    <Button
      color="white"
      variant="solid"
      bg="#0f1230"
      type="submit"
      width="100%"
      _hover={{ bg: "#1A365D" }}
      {...elemProps}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
