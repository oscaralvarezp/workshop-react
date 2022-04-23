import { Flex, Spinner } from "@chakra-ui/react";

export default function Loader() {
  return (
    <Flex justify="center" alignItems="center">
      <Spinner
        size="lg"
        emptyColor="gray.200"
        color="blue.400"
        thickness="5px"
      />
    </Flex>
  );
}
