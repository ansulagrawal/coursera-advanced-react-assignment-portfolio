import React from "react";
import { Avatar, Heading, Image, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const imageUrl = "https://avatars.githubusercontent.com/u/86121130?v=4";
const greeting = "Hello, I am Ansul Agrawal!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection justifyContent="center" alignItems="center" isDarkBackground backgroundColor="#2A4365">
    <Avatar size="2xl" name="Ansul Agrawal" src={imageUrl} />
    <Text fontSize="2xl">{greeting}</Text>
    <Text fontSize="6xl" as="b">
      {bio1}
    </Text>
    <Text fontSize="6xl" as="b">
      {bio2}
    </Text>
  </FullScreenSection>
);

export default LandingSection;
