import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";

import { getAllLaunches } from "../api/launches";
import CardItem from "../components/CardItem";
import Loader from "../components/Loader";

export default function Home () {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    getAllLaunches().then((data) => setLaunches(data));
  }, []);

  return (
    <>
      <Heading textAlign="center" m="5" as="h1" size="lg">
        Space X Launches
      </Heading>
      <section>
        {launches.length === 0 && (<Loader />)}
        {launches.map((launch, index) => (
          <CardItem key={index} {...launch} />
        ))}
      </section>
    </>
  );
}
