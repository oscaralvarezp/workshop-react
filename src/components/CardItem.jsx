import { Box, Button, Flex, Spacer, Tag, Text, Icon } from "@chakra-ui/react";
import { HiCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function CardItem(props) {
  return (
    <Box bg="gray.200" p="4" m="5" borderRadius="md">
      <Flex>
        <Text fontSize="2xl">
          Mission
          <strong> {props.name}</strong>
        </Text>
        <Spacer />
        <Tag p="1.5" colorScheme={props.success ? "green" : "red"}>
          {props.success ? "Success" : "Failure"}
        </Tag>
      </Flex>
      <Flex align="center" color="gray.500">
        <Icon as={HiCalendar} />
        <Text fontSize="sm" ml="2">
          {props.date_local.split("T")[0]}
        </Text>
      </Flex>
      <Link to={`launch/${props.id}`}>
        <Button mt="2" colorScheme="telegram">
          More Details
        </Button>
      </Link>
    </Box>
  );
}
