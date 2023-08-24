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
      width={isLargerThan1000 ? "895px" : "85%"}
      height={isLargerThan1000 ? "521px" : "auto"}
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
            <Flex
              direction={"column"}
              w={"100%"}
              borderBottom={"1px"}
              borderColor={"blackAlpha.200"}
            >
              <Flex justify={"space-between"}>
                <Flex>
                  <Image src="/youre.svg" mr={"3px"} />
                  <Image src="/subscribed.svg" />
                </Flex>
                <Button variant={"ghost"} onClick={handleModalClose}>
                  <Image src="union.svg" />
                </Button>
              </Flex>
              <Text color={"black"} fontSize={"16px"} mt={"36px"}>
                We'll keep you updated with{" "}
              </Text>
              <Text
                color={"black"}
                fontSize={"16px"}
                ml={"16px"}
                mt={"16px"}
                pb={"36px"}
              >
                <ul>
                  <li>Circular: The monthly Songcamp roundup</li>
                  <li>The latest information on all our camps & labs </li>
                </ul>
              </Text>
            </Flex>
            <Flex mt={"36px"} justify={"space-between"}>
              <Flex direction={"column"}>
                <Text color={"black"} fontSize={"16px"} w={"349px"} mt={"36px"}>
                  We host a one hour live call on our Discord called the
                  Songcamp Heartbeat. Mondays. 4pm Eastern. 1pm Pacific. Other
                  times in other places.
                </Text>

                <Button
                  as={"a"}
                  href="https://discord.com/invite/wHsJD2sTpc"
                  borderRadius={"173px"}
                  h={"48px"}
                  textColor={"white"}
                  backgroundColor={"black"}
                  fontFamily={"Helvetica"}
                  fontSize={"14px"}
                  fontWeight={"400"}
                  mt={"36px"}
                >
                  Join Us
                </Button>
              </Flex>
              <Image src="/scOwl.svg" />
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          <Flex></Flex>
          <Flex direction={"column"} m={"10%"} align={"center"}>
            <Flex>
              <Image src="/youre.svg" mr={"3px"} maxW={"35%"} />
              <Image src="/subscribed.svg" maxW={"65%"} />
            </Flex>
            <Image src="scOwl.svg" w={"90%"} mt={"5%"} />
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
                fontSize={"14px"}
                fontWeight={"400"}
                mt={"36px"}
              >
                Join Us
              </Button>
            </Flex>
          </Flex>
        </>
      )}
    </Flex>
  );
}
