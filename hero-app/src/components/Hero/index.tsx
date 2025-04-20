import { Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import HeroBg from "../../assets/hero.png";
import PlatformIcon from "../../assets/platform-icon.png";
import PlayIcon from "../../assets/Play.png";
function Hero() {
  return (
    <Box
      as="section"
      display={"flex"}
      justifyContent="center"
      alignItems="left"
      flexDirection="column"
      className="hero"
      p={4}
      bg="teal.500"
      color="white"
      textAlign="left"
      backgroundImage={`url(${HeroBg})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition={
        { base: "center", sm: "center", md: "top", lg: "top", xl: "top" }
      }
      height={
        { base: "100vh", sm: "100vh", md: "700px", lg: "800px",}
      }
    >
      <Container maxW="container.xl" textAlign="left" paddingTop="100px">
      <Flex
        p={4}
        width="10/12"
        maxWidth="2xl"
        flexDir="column"
        gap={8}
        className="block-text"
      >
        <Flex gap={2} alignItems="center">
          <Image src={PlatformIcon} alt="Logo" />
          <Text textTransform="uppercase">plataforma all in one</Text>
        </Flex>
        <Heading fontSize="44px">
          Sua escola online poderosa e lucrativa
        </Heading>
        <Text>
          Tenha sua própria escola online 100% white label com rede social,
          gamificação, clube de assinaturas, ecommerce e sistema EAD completo.
        </Text>
        <Flex maxWidth="2xl" flexDir="row" gap={2} alignItems="center">
          <Button
            backgroundColor="#00E1E7"
            color="#333"
            fontSize="20px"
            fontWeight="bold"
            padding={4}
            borderRadius="200px"
            _hover={{ backgroundColor: "#00B3B9" }}
            p={8}
          >
            Começar agora
          </Button>

          <Flex
            gap={1}
            alignItems="center"
            borderRadius="200px"
            backgroundColor="transparent"
            _hover={{ backgroundColor: "#00B3B9" }}
            p={4}
          >
            <Image src={PlayIcon} alt="Play" />
            <Button
              backgroundColor="transparent"
              fontSize="20px"
              fontWeight="bold"
            >
              Ver vídeo
            </Button>
          </Flex>
        </Flex>
      </Flex>
      </Container>
    </Box>
  );
}

export default Hero;
