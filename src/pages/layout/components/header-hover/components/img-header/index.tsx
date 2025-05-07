import { Box, Image } from "@chakra-ui/react";
import { IMenu, IMenuChild } from "@interfaces/IMenu.interface";

interface IImgHeader {
  selectedChild: IMenuChild;
  seletectedMenu: IMenu;
}

const ImgHeader = ({ selectedChild, seletectedMenu }: IImgHeader) => {
  return (
    <>
      {selectedChild.linkImg ? (
        <Image
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
          loading="lazy"
          src={selectedChild.linkImg}
          style={{
            transition: seletectedMenu.title ? "all .4s ease 0.5s" : "none",
            opacity: seletectedMenu.title ? 1 : 0,
          }}
        />
      ) : (
        <Box width={"100%"} height={"100%"} bgColor={"#000"}></Box>
      )}
    </>
  );
};

export default ImgHeader;
