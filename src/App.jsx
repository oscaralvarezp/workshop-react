import { useState, useEffect } from "react";
import { Flex, Heading, Image, Spinner } from "@chakra-ui/react";

import { getAllLaunches } from "./api/launches";
import logo from "./assets/logo-spacex.png";
import CardItem from "./components/CardItem";

export default function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    getAllLaunches().then((data) => setLaunches(data));
  }, []);

  return (
    <>
      <Image m="5" src={logo} alt="Space X Logo" htmlWidth="300" />
      <Heading m="5" as="h1" size="lg">
        Space X Launches
      </Heading>
      <section>
        {launches.length === 0 && (
          <Flex justify="center" alignItems="center">
            <Spinner
              size="lg"
              emptyColor="gray.200"
              color="blue.400"
              thickness="5px"
            />
          </Flex>
        )}
        {launches.map((launch, index) => (
          <CardItem key={index} { ...launch } />
        ))}
      </section>
    </>
  );
}
