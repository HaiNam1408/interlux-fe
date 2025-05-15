import { Center, CircularProgress } from "@chakra-ui/react";

interface ILoadingCustom {
  isLoading?: boolean;
}

const LoadingCustom = ({ isLoading }: ILoadingCustom) => {
  return (
    isLoading && (
      <Center
        className="w-full h-full absolute top-0 left-0 z-20"
        bg={"background.main"}
      >
        <CircularProgress value={80} isIndeterminate />
      </Center>
    )
  );
};

export default LoadingCustom;
