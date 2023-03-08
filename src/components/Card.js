import { Card as ChakraCard, CardBody, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <ChakraCard maxW="lg">
      <CardBody p={0}>
        <Image src={imageSrc} borderRadius="md" />
        <Stack spacing="3" p={[0, 3]}>
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text fontSize="xl">
            See more <FontAwesomeIcon icon={faArrowRight} />
          </Text>
        </Stack>
      </CardBody>
    </ChakraCard>
  );
};

export default Card;
