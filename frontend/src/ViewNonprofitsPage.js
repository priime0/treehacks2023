import { Center, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import Nonprofit from "./Nonprofit";
import { getNonprofits } from "./api";

export default function ViewNonprofitsPage() {
  const [nonprofits, setNonprofits] = useState([]);
  useEffect(() => {
    getNonprofits().then((data) => setNonprofits(data.nonprofits));
  }, []);
  return (
    <Stack>
      <Navbar />
      <Center paddingY={"2em"} backgroundColor={"#F7F7FA"}>
        <Stack dir={"column"} maxW={"3xl"} width={"100%"} marginX={"auto"} gap={"2em"}>
          {nonprofits.map((nonprofit) => {
            return <Nonprofit info={nonprofit} key={nonprofit.uuid} />;
          })}
        </Stack>
      </Center>
      <Footer />
    </Stack>
  );
}
