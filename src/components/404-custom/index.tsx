import { Center } from "@chakra-ui/react";
import FuzzyText from "@components/fuzzy-text";

const NotFound = () => {
  return (
    <Center
      width={"100%"}
      h={"100dvh"}
      bgColor={"#fff"}
      flexDir={"column"}
      gap={"2rem"}
    >
      <FuzzyText baseIntensity={0.2} color="#000" fontSize={"20rem"}>
        404
      </FuzzyText>
      <FuzzyText baseIntensity={0.2} color="#000">
        Not found
      </FuzzyText>
    </Center>
  );
};

export default NotFound;
