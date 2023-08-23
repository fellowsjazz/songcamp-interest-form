import React, { useEffect, useState } from "react";
import {
  Box,
  useMediaQuery,
  Image,
  Text,
  Center,
  Flex,
  Button,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { motion, useAnimation } from "framer-motion"; // Import useAnimation
import { BsFillEjectFill } from "react-icons/bs";

export default function Home() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const backgroundImage = "/bgCd.png"; // Path to your background image
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const animationControls = useAnimation(); // Initialize animation controls

  useEffect(() => {
    const audioElement = document.getElementById("audioElement");
    if (isPlaying) {
      // Start or restart the animation
      animationControls.start({ rotate: 360 });
      audioElement.play();
    } else {
      // Stop the animation
      animationControls.stop();
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    }
  }, [isPlaying, animationControls]);

  return (
    <>
      {isLargerThan1000 ? (
        <Box position="relative" h="100%">
          <audio id="audioElement" loop>
            <source src="soundEffect.mp3" type="audio/mpeg" />
          </audio>
          <Box position="absolute">
            <motion.div
              initial={{ rotate: 0 }}
              animate={animationControls} // Use the animation controls here
              transition={{ duration: 0.1, repeat: Infinity }}
            >
              <Image src={backgroundImage} h="100%" />
            </motion.div>
          </Box>
          <Flex justify="flex-start" position="relative" zIndex={1}>
            <Sidebar />
          </Flex>
          <Button
            position="absolute"
            bottom="1rem"
            right="1rem"
            colorScheme="blackAlpha"
            zIndex={2}
            onClick={handleClick}
            variant={"outline"}
          >
            {isPlaying ? (
              <BsFillEjectFill style={{ transform: "rotate(180deg)" }} />
            ) : (
              <BsFillEjectFill />
            )}
          </Button>
        </Box>
      ) : (
        <Flex justify="center">
          <Sidebar />
        </Flex>
      )}
    </>
  );
}
