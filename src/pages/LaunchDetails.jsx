import {
  Box,
  Flex,
  Heading,
  Icon,
  Tag,
  Text,
} from "@chakra-ui/react";

import { HiCalendar } from "react-icons/hi";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getLaunchById } from "../api/launches";
import Loader from "../components/Loader";

export default function LaunchDetails() {
  const { id } = useParams();
  const [launchDetail, setLaunchDetail] = useState([]);

  useEffect(() => {
    getLaunchById(id)
      .then(setLaunchDetail)
      .catch(console.error)
  }, [id]);

  return (
    <>
      {launchDetail.length === 0 ? (
        <Loader />
      ) : (
        <Box bg="gray.200" m="4" p="4">
          <Heading as="h1">
            Mission {launchDetail.name} 
          </Heading>
          <Flex align="center" color="gray.500">
            <Icon as={HiCalendar} />
            <Text fontSize="sm" ml="2">
              {launchDetail.date_local.split("T")[0]}
            </Text>
          </Flex>
          <Text textColor="InfoText">{launchDetail.details || 'Details not Provider'}</Text>
          <Flex align="center" justify="flex-end" paddingInline="10">
            <Tag
              mt="2"
              p="1.5"
              colorScheme={launchDetail.success ? "green" : "red"}
            >
              {launchDetail.success ? "Success" : "Failure"}
            </Tag>
          </Flex>
        </Box>
      )}
    </>
  );
}
