import Header from "header_app/Header";
import Hero from "hero_app/Hero";
import About from "about_app/About";
import { Box } from "@chakra-ui/react";
import HeroBg from "../../assets/hero.png";
export default function Home() {
  if (!Header) return <div>Header não carregado</div>;
  if (!Hero) return <div>Hero não carregado</div>;
  if (!About) return <div>About não carregado</div>;

  return (
    <div>
      <Box
        as="section"
        backgroundImage={`url(${HeroBg})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition={{
          base: "center",
          sm: "center",
          md: "top",
          lg: "top",
          xl: "top",
        }}
        height={{ base: "100vh", sm: "100vh", md: "700px", lg: "800px" }}
      >
        <Header />
        <Box
          as="section"
          display={"flex"}
          justifyContent="center"
          alignItems="left"
          flexDirection="column"
          p={4}
          color="white"
          textAlign="left"
        >
          <Hero />
        </Box>
      </Box>
      <About />
    </div>
  );
}
