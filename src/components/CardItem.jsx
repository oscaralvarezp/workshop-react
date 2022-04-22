import { Box, Button, Flex, Spacer, Tag, Text, Icon } from "@chakra-ui/react";
import { HiCalendar } from "react-icons/hi";

export default function CardItem({ launch }) {
  return (
    <Box bg="gray.200" p="4" m="5" borderRadius="md">
      <Flex>
        <Text fontSize="2xl">
          Mission
          <strong> {launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p="1.5" colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>
      <Flex align="center" color="gray.500">
        <Icon as={HiCalendar} />
        <Text fontSize="sm" ml="2">
          {launch.launch_date_local.split("T")[0]}
        </Text>
      </Flex>

      <Button mt="2" colorScheme="telegram">
        More Details
      </Button>
    </Box>
  );
}
