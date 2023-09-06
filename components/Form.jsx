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
} from "@chakra-ui/react";
import SuccessModal from "./SuccessModal";

export default function Form() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const toast = useToast();
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [modalOn, setModalOn] = useState(true);

  const [name, setName] = useState("");
  const [selects, setSelects] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");
  const [twitter, setTwitter] = useState("");
  const [email, setEmail] = useState("");
  const [music, setMusic] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    selects: [""],
    address: "",
    twitter: "",
    email: "",
    music: "",
    subscribed: true,
  });

  //edits the formData variable to update it
  useEffect(() => {
    setFormData({
      name: name,
      selects: selects,
      address: walletAddress,
      twitter: twitter,
      email: email,
      music: music,
      subscribed: subscribe,
    });
  }, [name, selects, walletAddress, twitter, email, music, subscribe]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSelectChange = (option) => {
    if (!selects.includes(option)) {
      // If the option is not in the array, add it
      setSelects((prevSelects) => [...prevSelects, option]);
    } else {
      // If the option is already in the array, remove it
      setSelects((prevSelects) =>
        prevSelects.filter((item) => item !== option)
      );
    }
  };

  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleTwitterChange = (e) => {
    setTwitter(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMusicChange = (e) => {
    setMusic(e.target.value);
  };

  const handleSubmit = () => {
    console.log(
      `Name:${name} Selects:${selects} Wallet:${walletAddress} Twitter:${twitter} Email:${email} Music:${music} Subscribe:${subscribe}`
    );
    console.log(`Post Payload Prepped (formData): `, formData);
    if (!name || !email) {
      return toast({
        position: "bottom-right",
        title: "Submission Error",
        description: "Name and Email are required fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    if (walletAddress.includes(".eth")) {
      return toast({
        position: "bottom-right",
        title: "Submission Error",
        description: "No ENS addresses, please!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    handlePost(formData);
    setDisableSubmit(true);
    setModalOn(true);

    return toast({
      position: "bottom-right",
      title: "Submission Successful",
      description: "See you on the internet!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handlePost = async (values) => {
    console.log("Sending request with payload:", values);
    const request = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(values),
    });
    const result = await request.json();
    console.log("Response from server:", result);

    if (result.data != "ok") {
      console.log("error submitting"); // add some functionality so the user knows it didn't work
    }
    if (result.data == "ok") {
      console.log("data submitted");
    }
  };

  const handleModalClose = () => {
    setModalOn(false);
  };

  return (
    <Flex flexDirection={"column"} >
      {modalOn ? <SuccessModal handleModalClose={handleModalClose} /> : null}
      <Text color={"black"} fontSize={"16px"} mt={"24px"}>
        Name
      </Text>
      <Input
        my={"6px"}
        w={"100%"}
        fontSize={"16px"}
        variant={"unstyled"}
        borderBottom={"1px solid #000"}
        borderRadius={"0"}
        placeholder="peace_node"
        _placeholder={{ opacity: 0.2, color: "black" }}
        py={"8px"}
        color={"black"}
        onChange={handleNameChange}
      />
      <Text color={"black"} fontSize={"16px"} mt={"24px"}>
        Select all that apply
      </Text>
      <Flex mt={"12px"}>
        <Flex
          id="column 1"
          direction={"column"}
          mr={isLargerThan1000 ? "64px" : "5%"}
        >
          <Flex id="option" align={"center"}>
            <Checkbox
              mr={"12px"}
              borderColor={"blackAlpha.500"}
              size={"md"}
              colorScheme="gray"
              onChange={() => handleSelectChange("Singer/Songwriter")}
            />
            <Text color={"blackAlpha.500"} fontSize={"14px"}>
              Singer/Songwriter
            </Text>
          </Flex>
          <Flex id="option" align={"center"}>
            <Checkbox
              mr={"12px"}
              borderColor={"blackAlpha.500"}
              size={"md"}
              colorScheme="gray"
              onChange={() => handleSelectChange("Musician")}
            />
            <Text color={"blackAlpha.500"} fontSize={"14px"}>
              Musician
            </Text>
          </Flex>
          <Flex id="option" align={"center"}>
            <Checkbox
              mr={"12px"}
              borderColor={"blackAlpha.500"}
              size={"md"}
              colorScheme="gray"
              onChange={() => handleSelectChange("Producer")}
            />
            <Text color={"blackAlpha.500"} fontSize={"14px"}>
              Producer
            </Text>
          </Flex>
          <Flex id="option" align={"center"}>
            <Checkbox
              mr={"12px"}
              borderColor={"blackAlpha.500"}
              size={"md"}
              colorScheme="gray"
              onChange={() => handleSelectChange("Industry Professional")}
            />
            <Text color={"blackAlpha.500"} fontSize={"14px"}>
              Industry Professional
            </Text>
          </Flex>
        </Flex>
        <Flex id="column 2" direction={"column"}>
          <Flex id="option" align={"center"}>
            <Checkbox
              mr={"12px"}
              borderColor={"blackAlpha.500"}
              size={"md"}
              colorScheme="gray"
              onChange={() => handleSelectChange("Software Engineer")}
              
            />
            <Text color={"blackAlpha.500"} fontSize={"14px"}>
              Software Engineer
            </Text>
          </Flex>
          <Flex id="option" align={"center"}>
            <Checkbox
              mr={"12px"}
              borderColor={"blackAlpha.500"}
              size={"md"}
              colorScheme="gray"
              onChange={() => handleSelectChange("Visual Artist")}
            />
            <Text color={"blackAlpha.500"} fontSize={"14px"}>
              Visual Artist
            </Text>
          </Flex>
          <Flex id="option" align={"center"}>
            <Checkbox
              mr={"12px"}
              borderColor={"blackAlpha.500"}
              size={"md"}
              colorScheme="gray"
              onChange={() => handleSelectChange("Collector")}
            />
            <Text color={"blackAlpha.500"} fontSize={"14px"}>
              Collector
            </Text>
          </Flex>
          <Flex id="option" align={"center"}>
            <Checkbox
              mr={"12px"}
              borderColor={"blackAlpha.500"}
              size={"md"}
              colorScheme="gray"
              onChange={() => handleSelectChange("Other")}
            />
            <Text color={"blackAlpha.500"} fontSize={"14px"}>
              Other
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Text color={"black"} fontSize={"16px"} mt={"24px"}>
        Full Ethereum Address
      </Text>
      <Input
        my={"6px"}
        w={"100%"}
        fontSize={"16px"}
        variant={"unstyled"}
        borderBottom={"1px solid #000"}
        borderRadius={"0"}
        placeholder="0x92Fbd2faF1E67B5A55Ce9196b4EAA3B55c23cECa"
        _placeholder={{ opacity: 0.2, color: "black" }}
        py={"8px"}
        color={"black"}
        onChange={handleWalletAddressChange}
      />
      <Text color={"black"} fontSize={"16px"} mt={"24px"}>
        Twitter
      </Text>
      <Input
        my={"6px"}
        w={"100%"}
        fontSize={"16px"}
        variant={"unstyled"}
        borderBottom={"1px solid #000"}
        borderRadius={"0"}
        placeholder="https://twitter.com/peace_node"
        _placeholder={{ opacity: 0.2, color: "black" }}
        py={"8px"}
        color={"black"}
        onChange={handleTwitterChange}
      />
      <Text color={"black"} fontSize={"16px"} mt={"24px"}>
        Email
      </Text>
      <Input
        my={"6px"}
        w={"100%"}
        fontSize={"16px"}
        variant={"unstyled"}
        borderBottom={"1px solid #000"}
        borderRadius={"0"}
        placeholder="peacenode@aol.com"
        _placeholder={{ opacity: 0.2, color: "black" }}
        py={"8px"}
        color={"black"}
        onChange={handleEmailChange}
      />
      <Text color={"black"} fontSize={"16px"} mt={"24px"}>
        Links
      </Text>
      <Input
        my={"6px"}
        w={"100%"}
        fontSize={"16px"}
        variant={"unstyled"}
        borderBottom={"1px solid #000"}
        borderRadius={"0"}
        placeholder="drop a link to some of your work"
        _placeholder={{ opacity: 0.2, color: "black" }}
        py={"8px"}
        color={"black"}
        onChange={handleMusicChange}
      />
      <Flex my={"24px"}>
        <Checkbox
          mr={"12px"}
          borderColor={"blackAlpha.700"}
          onChange={(e) => setSubscribe(!subscribe)}
        />
        <Text color={"black"} fontSize={"14px"}>
          Subscribe to Songcamp
        </Text>
      </Flex>
      <Button
        borderRadius={"173px"}
        h={"48px"}
        textColor={"white"}
        backgroundColor={"black"}
        fontFamily={"Helvetica"}
        fontSize={"16px"}
        fontWeight={"400"}
        onClick={handleSubmit}
        isDisabled={disableSubmit}
        _hover={{ background: "#000000", opacity: "0.5" }}
        letterSpacing={"-0.8px"}
      >
        Submit
      </Button>
    </Flex>
  );
}
