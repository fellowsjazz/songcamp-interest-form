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
import { motion, useAnimation, useAnimate } from "framer-motion"; // Import useAnimation
import { BsFillEjectFill } from "react-icons/bs";

export default function Home() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const backgroundImage = "/bgCd.svg"; // Path to your background image
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const animationControls = useAnimation(); // Initialize animation controls

  const [scope, animate] = useAnimate()

  useEffect(() => {
    const audioElement = document.getElementById("audioElement");
    const audioElementEnd = document.getElementById("audioElementEnd");
    if (isPlaying) {
      // Start or restart the animation
      animationControls.start({ rotate: 1000000});
      audioElement.play();

    } else {
      // Stop the animation
      setTimeout(() => {
        animationControls.stop();
      }, 2000);

      audioElementEnd?.play();
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    }
  }, [isPlaying, animationControls]);

  return (
    <>
      {isLargerThan1000 ? (
        <Box position="relative" maxH="100%" overflow={"hidden"}>
          <audio id="audioElement" loop>
            <source src="soundEffect.mp3" type="audio/mpeg" />
          </audio>
          <audio id="audioElementEnd">
            <source src="soundEffectStop.mp3" type="audio/mpeg" />
          </audio>
          <Box position="absolute" mt={"5%"} ml={"5%"}>
            <motion.div
              initial={{ rotate: 0 }}
              animate={animationControls} // Use the animation controls here
              transition={{ duration: 0.1, repeat: Infinity }}
              ref={scope}
            >
              <Image src={backgroundImage} h="777px" />
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
