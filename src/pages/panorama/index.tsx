import { Box } from "@chakra-ui/react";
import Pano from "./components/pano";
import { IDataPano, IImage } from "@interfaces/IPanorama.interface";
import { useEffect, useState } from "react";
import Control from "./components/control";
import Map from "./components/map";
import InfoContent from "./components/info-content";
import MenuContent from "./components/menu";
import { useLocation } from "react-router-dom";

export const dataPano: IDataPano = {
  listDot: [
    {
      src: "Kitchen",
      left: "56%",
      top: "31%",
    },
    {
      src: "Kitchen 2",
      left: "42%",
      top: "31%",
    },
    {
      src: "Den",
      left: "20%",
      top: "22%",
    },
    {
      src: "Bathroom",
      left: "25%",
      top: "47%",
    },
    {
      src: "Bedroom",
      left: "26%",
      top: "71.5%",
    },
    {
      src: "Primary Bedroom",
      left: "70%",
      top: "59%",
    },
    {
      src: "Walk In",
      left: "78%",
      top: "32%",
    },
    {
      src: "Ensuite",
      left: "78%",
      top: "19%",
    },
    {
      src: "Living Room",
      left: "50.4%",
      top: "68%",
    },
  ],
  listImage: [
    {
      nameRoom: "Kitchen",
      listMarker: [
        {
          nameRoom: "Kitchen 2",
          positions: { yaw: 1.619839020984459, pitch: 0.08 },
        },
        {
          nameRoom: "Primary Bedroom",
          positions: { yaw: 5.6999621048682085, pitch: 0.18 },
        },
        {
          nameRoom: "Living Room",
          positions: { yaw: 0.3208086174459885, pitch: 0.16 },
        },
        {
          nameRoom: "Bathroom",
          positions: {
            yaw: 1.27,
            pitch: 0.18,
          },
        },
        {
          nameRoom: "Bedroom",
          positions: { yaw: 1.11, pitch: 0.18 },
        },
        {
          nameRoom: "Den",
          positions: {
            yaw: 1.8782437841913846,
            pitch: 0.18,
          },
        },
      ],
      src: "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850366/Pano_Vista/Type_A/24-0711_VISTAPOINT_-_Type_A_-_Kitchen_VR360_-_Bassic_Scheme_A_kth6mq.jpg",
      options: [
        "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850366/Pano_Vista/Type_A/24-0711_VISTAPOINT_-_Type_A_-_Kitchen_VR360_-_Bassic_Scheme_A_kth6mq.jpg",

        "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850367/Pano_Vista/Type_A/24-0711_VISTAPOINT_-_Type_A_-_Kitchen_VR360_-_Bassic_Scheme_B_sulqfw.jpg",

        "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850364/Pano_Vista/Type_A/24_-_0711_VISTAPOINT_-_Type_A_-_Kitchen_VR360_Upgrage_Scheme_A_p6boov.jpg",

        "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850364/Pano_Vista/Type_A/24_-_0711_VISTAPOINT_-_Type_A_-_Kitchen_VR360_Upgrage_Scheme_B_xzk0ra.jpg",
      ],
    },
    {
      nameRoom: "Kitchen 2",
      listMarker: [
        {
          nameRoom: "Kitchen",
          positions: { yaw: 4.687636805187437, pitch: 0.08 },
        },
        {
          nameRoom: "Primary Bedroom",
          positions: { yaw: 5.1358070414759, pitch: 0.15 },
        },
        {
          nameRoom: "Living Room",
          positions: { yaw: 6.1445256471757, pitch: 0.15 },
        },
        {
          nameRoom: "Bedroom",
          positions: { yaw: 0.6824531638015152, pitch: 0.18 },
        },
        {
          nameRoom: "Den",
          positions: {
            yaw: 2.2910639595817353,
            pitch: 0.18,
          },
        },
      ],
      src: "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850368/Pano_Vista/Type_A/24-0711_VISTAPOINT_-_Type_A_-_Kitchen2_VR360_sxyrv4.jpg",
    },
    {
      nameRoom: "Primary Bedroom",
      listMarker: [
        {
          nameRoom: "Kitchen",
          positions: { yaw: 2.21578868187516, pitch: 0.1 },
        },
        {
          nameRoom: "Walk In",
          positions: { yaw: 3.4373189356215215, pitch: 0.16 },
        },
      ],
      src: "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850365/Pano_Vista/Type_A/24-0711_VISTAPOINT_-_Type_A_-_360_Master_Bedroom_qk6bot.jpg",
    },
    {
      nameRoom: "Bedroom",
      listMarker: [
        {
          nameRoom: "Bathroom",
          positions: { yaw: 3.251165962633299, pitch: 0.15 },
        },
      ],
      src: "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850364/Pano_Vista/Type_A/24-0711_VISTAPOINT_-_Type_A_-_Bedroom_VR360_h5klfo.jpg",
    },
    {
      nameRoom: "Ensuite",
      listMarker: [
        {
          nameRoom: "Primary Bedroom",
          positions: { yaw: 4.72, pitch: 0.18 },
        },
        {
          nameRoom: "Walk In",
          positions: { yaw: 5.15, pitch: 0.12 },
        },
      ],
      src: "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850370/Pano_Vista/Type_A/24-1023_VISTAPOINT_-_Type_A_-_Ensuite_VR360_-_Scheme_A_wtoaxw.jpg",
      options: [
        "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850370/Pano_Vista/Type_A/24-1023_VISTAPOINT_-_Type_A_-_Ensuite_VR360_-_Scheme_A_wtoaxw.jpg",
        "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850374/Pano_Vista/Type_A/24-1023_VISTAPOINT_-_Type_A_-_Ensuite_VR360_-_Scheme_B_u0nv6h.jpg",
      ],
    },
    {
      nameRoom: "Bathroom",
      listMarker: [
        {
          nameRoom: "Bedroom",
          positions: { yaw: 1.3, pitch: 0.1 },
        },
        {
          nameRoom: "Kitchen",
          positions: { yaw: 5.957198287982248, pitch: 0.1 },
        },
        {
          nameRoom: "Primary Bedroom",
          positions: {
            yaw: 0.012878225144016184,
            pitch: 0.15,
          },
        },
      ],
      src: "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850363/Pano_Vista/Type_A/24-0711_VISTAPOINT_-_Type_A_-_Bathroom_VR360_mzqx6d.jpg",
    },

    {
      nameRoom: "Living Room",
      listMarker: [
        {
          nameRoom: "Kitchen",
          positions: {
            yaw: 3.3617414266514767,
            pitch: 0.1,
          },
        },
        {
          nameRoom: "Kitchen 2",
          positions: { yaw: 2.9, pitch: 0.1 },
        },
        {
          nameRoom: "Primary Bedroom",
          positions: {
            yaw: 3.8643217078829006,
            pitch: 0.2,
          },
        },
      ],
      src: "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850369/Pano_Vista/Type_A/24-0711_VISTAPOINT_-_Type_A_-_Living_room_VR360_g3gxw0.jpg",
    },

    {
      nameRoom: "Walk In",
      listMarker: [
        {
          nameRoom: "Primary Bedroom",
          positions: { yaw: 4.718706021339108, pitch: 0.22 },
        },
        {
          nameRoom: "Ensuite",
          positions: { yaw: 1.574099710674913, pitch: 0.22 },
        },
      ],
      src: "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850369/Pano_Vista/Type_A/24-1023_VISTAPOINT_-_Type_A_-_Closet_VR360_xlbzk1.jpg",
    },
    {
      nameRoom: "Den",
      listMarker: [
        {
          nameRoom: "Kitchen 2",
          positions: {
            yaw: 0.1307502528020011,
            pitch: 0.18,
          },
        },
      ],
      src: "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741850367/Pano_Vista/Type_A/24-0711_VISTAPOINT_-_Type_A_-_Den_Room_VR360_uio4vn.jpg",
    },
  ],
  map: {
    src: "https://res.cloudinary.com/dip3vvjhy/image/upload/v1741851843/Pano_Vista/Type_A/A_tp70fc.png",
  },
  title: "unit A",
};

const Panorama = () => {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [yaw, setYaw] = useState(0);
  const [isControl, setIsControl] = useState<{
    isMenu: boolean;
    isFloorPlan: boolean;
    isInfo: boolean;
  }>({ isFloorPlan: false, isInfo: false, isMenu: false });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedPano, setSelectedPano] = useState<IImage>();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.slice(1);
    console.log(hash);
    setSelectedPano(
      dataPano.listImage.find(
        (item) => item.nameRoom === decodeURIComponent(hash.replace("#", ""))
      )
    );
  }, [location]);

  return (
    <Box width={"100dvw"} height={"100dvh"} position={"relative"} zIndex={1}>
      <Pano
        selectedPano={selectedPano || { listMarker: [], nameRoom: "", src: "" }}
        selectedOption={selectedOption}
        setYaw={setYaw}
      />
      <Control setIsControl={setIsControl} isControl={isControl} />
      <Map
        isShow={isControl.isFloorPlan}
        src={dataPano?.map.src || ""}
        listDot={dataPano?.listDot || []}
        numberRotate={yaw}
      />
      <InfoContent isShow={isControl.isInfo} title={dataPano?.title || ""} />
      <MenuContent
        isShow={isControl.isMenu}
        listImage={dataPano?.listImage || []}
        selectedIndex={selectedIndex}
        selectedOption={selectedOption}
        setSelectedIndex={setSelectedIndex}
        setSelectedOption={setSelectedOption}
      />
    </Box>
  );
};

export default Panorama;
