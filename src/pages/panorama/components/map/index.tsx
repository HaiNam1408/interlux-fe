import { useState } from "react";
import arrowOpen from "@assets/images/arrow-open.png";
import arrowClose from "@assets/images/arrow-close.png";
import { IDot } from "@interfaces/IPanorama.interface";
import { Box, Image } from "@chakra-ui/react";
import AddressDot from "../address-dot";

interface IMap {
  isShow: boolean;
  src: string;
  listDot: IDot[];
  numberRotate: number;
}

const Map = ({ isShow, src, listDot, numberRotate }: IMap) => {
  const [isZoom, setIsZoom] = useState<boolean>(false);

  return (
    <Box
      width={
        isZoom
          ? { xl: "40dvw", lg: "50dvw", base: "60dvw" }
          : {
              xl: "40rem",
              lg: "30rem",
              md: "26rem",
              sm: "22rem",
              base: "18rem",
            }
      }
      zIndex={10}
      position={"absolute"}
      top={isShow ? (isZoom ? "50%" : "1rem") : "-1rem"}
      right={isZoom ? "50%" : "2rem"}
      style={{
        transition: "all .8s ease-in-out",
        transform: isZoom ? "translate(50%, -50%)" : "translate(0, 0)",
        opacity: isShow ? 1 : 0,
        pointerEvents: isShow ? "auto" : "none",
      }}
      sx={{
        background: "#59646A66",
        backdropFilter: "blur(10px)" /* Làm mờ nền */,
        "-webkit-backdrop-filter": "blur(10px)" /* Hỗ trợ Safari */,
      }}
    >
      <Image
        width={"100%"}
        height={"auto"}
        objectFit={"contain"}
        src={src}
      ></Image>
      <Box
        width={"2rem"}
        height={"2rem"}
        position={"absolute"}
        style={{ cursor: "pointer" }}
        bottom={isZoom ? "auto" : "-1rem"}
        left={isZoom ? "auto" : "-1rem"}
        top={!isZoom ? "auto" : "-1rem"}
        right={!isZoom ? "auto" : "-1rem"}
        onClick={() => setIsZoom(!isZoom)}
      >
        <Image
          width={"100%"}
          height={"auto"}
          style={{ objectFit: "contain" }}
          src={isZoom ? arrowClose : arrowOpen}
        ></Image>
      </Box>

      {listDot.map((item, index) => (
        <AddressDot
          key={index}
          left={item.left}
          link={item.src}
          size={isZoom ? "2rem" : "1rem"}
          paddingSize={isZoom ? ".4rem" : ".2rem"}
          top={item.top}
          numberRotate={numberRotate}
          isZoom={isZoom}
        />
      ))}
    </Box>
  );
};

export default Map;
