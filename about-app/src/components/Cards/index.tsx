import { Box, Heading, Image } from "@chakra-ui/react";

interface CardsProps {
  title: string;
  description: string;
  imageUrl: string;
}

function Card({ title, description, imageUrl }: CardsProps) {
  return (
    <Box width={["100%", "100%", "30%"]} p={4}  borderRadius="lg" bg="white" m="2rem 0">
      <Image src={imageUrl} alt="Placeholder Image" borderRadius="md" />
      <Heading as="h3" size="lg" mt={4} mb={2}>
        {title}
      </Heading>
      <Box fontSize="md" color="gray.600">
        {description}
      </Box>
    </Box>
  );
}

export default Card;
