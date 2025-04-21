import { Container, Flex, Text, Image } from "@chakra-ui/react";
import Rocket from "../assets/rocket.png";
import ArrowRight from "../assets/arrow.png";
import TrilhasIcon from "../assets/icon-trilhas.png";
import Card from "../components/Cards";
function About() {
  return (
    <Container maxW="container.xl" p={4} mt={10}>
      <Flex justifyContent="space-between">
        <Text
          fontWeight="bold"
          mb={4}
          textTransform="uppercase"
          color="#432E98"
        >
          pensamos em cada detalhe
        </Text>
        <Text mb={4}>Conheça alguns dos nossos recursos ⚡️</Text>
      </Flex>

      <Text fontSize="4xl" mt={4} fontWeight={"semibold"} color="#130C25">
        Queremos que o aluno se sinta confortável enquanto aprende
      </Text>

      <Flex gap={4} mt={10} flexWrap="wrap">
        <Card
          title="Trilhas de etapas"
          description="Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar."
          imageUrl={TrilhasIcon}
        />
        <Card
          title="Trilhas de etapas"
          description="Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar."
          imageUrl={TrilhasIcon}
        />
        <Card
          title="Trilhas de etapas"
          description="Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar."
          imageUrl={TrilhasIcon}
        />
      </Flex>
      <hr style={{ margin: "20px 0", border: "1px solid #E7E7E9" }} />
      <Flex justifyContent="space-between" mt={10}>
        <Text
          mb={4}
          display="flex"
          alignItems="center"
          gap={2}
          flexDir="row-reverse"
        >
          Veja todos os outros recursos disponíveis para te ajudar
          <Image src={Rocket} alt="Rocket" />
        </Text>
        <Text mb={4} display="flex" alignItems="center" gap={2} color="#432E98">
          Ver mais
          <Image src={ArrowRight} alt="Rocket" />
        </Text>
      </Flex>
    </Container>
  );
}

export default About;
