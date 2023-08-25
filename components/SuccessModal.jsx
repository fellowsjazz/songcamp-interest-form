import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  Button,
  Text,
  Checkbox,
  Flex,
  useMediaQuery,
  useToast,
  Image,
} from "@chakra-ui/react";

export default function SuccessModal(props) {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  const handleModalClose = props.handleModalClose;
  return (
    <Flex
      position={"fixed"}
      top={"50%"}
      left={"50%"}
      transform={"translate(-50%, -50%)"}
      width={isLargerThan1000 ? "421px" : "85%"}
      height={isLargerThan1000 ? "auto" : "auto"}
      border={"1px"}
      borderColor={"black"}
      backgroundColor={"white"}
      borderRadius={"32px"}
      zIndex={3}
      boxShadow={"0px 0px 250px 300px #FFF"}
    >
      {isLargerThan1000 ? (
        <>
          <Flex p={"36px"} direction={"column"} w={"100%"}>
            <Flex justify={"space-between"}>
              <Flex>
                <Image src={"/thankYou.svg"} />
              </Flex>
              <Button variant={"ghost"} onClick={handleModalClose}>
                <Image src="union.svg" />
              </Button>
            </Flex>

            <Flex direction={"column"}>
              <Text color={"black"} fontSize={"16px"} w={"349px"} mt={"36px"}>
                We host a one hour live call on our Discord called the Songcamp
                Heartbeat. Mondays. 4pm Eastern. 1pm Pacific. Other times in
                other places.
              </Text>

              <Button
                as={"a"}
                href="https://discord.com/invite/wHsJD2sTpc"
                borderRadius={"173px"}
                h={"48px"}
                textColor={"white"}
                backgroundColor={"black"}
                fontFamily={"Helvetica"}
                fontSize={"16px"}
                fontWeight={"400"}
                mt={"36px"}
                _hover={{ background: "#000000", opacity: "0.5" }}
                letterSpacing={"-0.8px"}
              >
                Join us on Discord
              </Button>
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          <Flex direction={"column"} m={"10%"} align={"center"}>
            <Flex direction={"row"} justify={"space-between"} w={"100%"}>
              <Image src="/thankYou.svg" />
              <Button variant={"ghost"} onClick={handleModalClose}>
                <Image src="union.svg" />
              </Button>
            </Flex>

            <Flex direction={"column"}>
              <Text color={"black"} fontSize={"16px"} w={"100%"} mt={"36px"}>
                We host a one hour live call on our Discord called the Songcamp
                Heartbeat. Mondays. 4pm Eastern. 1pm Pacific. Other times in
                other places.
              </Text>

              <Button
                as={"a"}
                href="https://discord.com/invite/wHsJD2sTpc"
                borderRadius={"173px"}
                h={"48px"}
                textColor={"white"}
                backgroundColor={"black"}
                fontFamily={"Helvetica"}
                fontSize={"16px"}
                fontWeight={"400"}
                mt={"36px"}
                _hover={{ background: "#000000", opacity: "0.5" }}
                letterSpacing={"-0.8px"}
                
              >
                Join us on Discord
              </Button>
            </Flex>
          </Flex>
        </>
      )}
    </Flex>
  );
}
