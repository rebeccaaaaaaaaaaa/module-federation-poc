import { Box, Button, Container, Image, Menu, Portal } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";

const itensMenu = [
  { name: "Soluções", link: "/" },
  { name: "Preços", link: "/sobre" },
  { name: "Academy", link: "/funcionalidades" },
  { name: "Blog", link: "/precos" },
  { name: "Contato", link: "/contato" },
];
const Header = () => {
  return (
   <Box as="header" backdropFilter={"blur(10px)"} background={"#33333316"}>
     <Container maxW="container.xl" textAlign="left">
      <Box
        as="nav"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={4}
        backgroundColor="##00E1E7"
      >
        <Box as="h1" fontSize="2xl" fontWeight="bold">
          <Image src={Logo} alt="Logo"/>
        </Box>
        <Box as="ul" display="flex" gap={4} color="#fff">
          {itensMenu.map((item) => (
            <Box as="li" key={item.name}>
              <a href={item.link}>{item.name}</a>
            </Box>
          ))}
        </Box>

        <Box as="ul" display="flex" gap={4} alignItems="center">
          <Box as="li" color="#fff">
            <a href="/login">Entrar</a>
          </Box>
          <Button
            border="1px solid #fff"
            backgroundColor="transparent"
            color="#fff"
            fontSize="16px"
            fontWeight="bold"
            borderRadius="200px"
          >
            Começar agora
          </Button>
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="ghost" size="sm" color="#fff">
                PT
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="new-txt-a" color="#fff">
                   EN
                  </Menu.Item>
                  <Menu.Item value="new-file-a" color="#fff">
                    ES
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Box>
      </Box>
    </Container>
   </Box>
  );
};

export default Header;
