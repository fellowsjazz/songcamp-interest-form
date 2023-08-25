import React from "react";
import { Box, useMediaQuery, Image, Text } from "@chakra-ui/react";
import Form from "./Form";

export default function Sidebar() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      display="inline-flex"
      height="100%"
      py={isLargerThan1000 ? "4vh" : "32px"}
      px={isLargerThan1000 ? "64px" : "0px"}
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      borderRight={isLargerThan1000 ? "1px solid #000" : "none"}
      background="var(--0, #FFF)"
      flexShrink={0}
      maxH={"100vh"}
      overflowY={"auto"}
      sx={{
        "&::-webkit-scrollbar": {
          display: "none", // Hide the scrollbar
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="space-around"
        maxW={isLargerThan1000 ? "365px" : "90vw"}
      >
        <Box display="flex" justifyContent={"space-between"}>
          <a href="https://www.song.camp" target="_blank">
            <Image src="/headerLogo1.svg" />
          </a>
          <Image src="/headerLogo2.svg" />
          <Image src="/headerLogo3.svg" />
          <Image src="/headerLogo4.svg" />
        </Box>
        <Box display={"flex"} mt={isLargerThan1000 ? "4vh" : "32px"}>
          <Image src="/songCamp.svg" />
        </Box>
        <Text color="#000" fontSize="16px" lineHeight="normal" mt={"16px"}>
          Welcome to Songcamp. We are an artist collective and creative studio
          unlocking new ways of creating and releasing music on the internet.
          Please provide the information below to signal your interest as a
          participant, a collector, or an innocent bystander.
        </Text>
        <Form />
      </Box>
    </Box>
  );
}
