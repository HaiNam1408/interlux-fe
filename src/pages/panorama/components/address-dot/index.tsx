import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import radio from "@assets/images/radio.png";
import { Box, Image } from "@chakra-ui/react";

interface IAddressDot {
  link: string;
  size: string;
  paddingSize: string;
  top: string;
  left: string;
  numberRotate: number;
  isZoom: boolean;
}

const AddressDot = ({
  left,
  link,
  size,
  top,
  paddingSize,
  numberRotate,
  isZoom,
}: IAddressDot) => {
  const navigator = useNavigate();
  const location = useLocation();
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const listplus90 = [
    {
      nameType: "type-a",
      room: ["Bathroom", "Den", "Walk In"],
    },
    {
      nameType: "type-b",
      room: ["Bathroom", "Walk In", "Ensuite"],
    },
    {
      nameType: "type-c",
      room: ["Den"],
    },
    {
      nameType: "type-f",
      room: ["Kitchen 2", "Kitchen", "Living Room", "Ensuite", "Bedroom 2"],
    },
  ];

  const list90 = [
    {
      nameType: "type-a",
      room: ["Walk In", "Bathroom 2"],
    },
    {
      nameType: "type-e",
      room: ["Bathroom"],
    },
    {
      nameType: "type-g",
      room: ["Bathroom"],
    },
  ];

  const list30 = [
    {
      nameType: "type-c",
      room: ["Bedroom"],
    },
  ];

  const listPlus30 = [
    {
      nameType: "type-d",
      room: ["Ensuite"],
    },
  ];

  const list120 = [
    {
      nameType: "type-d",
      room: ["Kitchen", "Kitchen 2", "Walk In", "Bedroom"],
    },
  ];
  const list135 = [
    {
      nameType: "type-f",
      room: ["Primary Bedroom"],
    },
  ];
  const list20 = [
    {
      nameType: "type-f",
      room: ["Bedroom"],
    },
  ];

  const list180 = [
    {
      nameType: "type-b",
      room: [
        "Den",
        "Bathroom",
        "Bedroom",
        "Primary Bedroom",
        "Walk In",
        "Ensuite",
        "Living Room",
        "Kitchen 2",
      ],
    },
  ];

  const listPlus360 = [
    {
      nameType: "type-c",
      room: [
        "Kitchen",
        "Kitchen 2",
        "Primary Bedroom",
        "Walk In",
        "Bathroom",
        "Ensuite",
        "Living Room",
      ],
    },
    {
      nameType: "type-e",
      room: ["Kitchen", "Kitchen 2", "Bedroom", "Living Room"],
    },
    {
      nameType: "type-g",
      room: ["Kitchen", "Kitchen 2", "Bedroom", "Living Room"],
    },
  ];

  const list270 = [
    {
      nameType: "type-b",
      room: ["Den"],
    },
  ];

  const handleNavigator = () => {
    navigator(`#${link}`);
  };

  const linkNet = location.pathname.slice(1, location.pathname.length - 1);

  useEffect(() => {
    const hash = location.hash.slice(1);
    const decodedHash = decodeURIComponent(hash);
    setIsSelected(decodedHash === link);
  }, [location, link]);

  const [prevYaw, setPrevYaw] = useState<number | null>(null);
  const [rotation, setRotation] = useState<number>(0);

  // Chuyển đổi radian -> độ
  const convertYawToDeg = (currentYawRadians: number) => {
    const room180 =
      list180.find((item) => item.nameType === linkNet)?.room || [];
    const room90 = list90.find((item) => item.nameType === linkNet)?.room || [];
    const roomPlus90 =
      listplus90.find((item) => item.nameType === linkNet)?.room || [];
    const room270 =
      list270.find((item) => item.nameType === linkNet)?.room || [];
    const room360 =
      listPlus360.find((item) => item.nameType === linkNet)?.room || [];
    const room30 = list30.find((item) => item.nameType === linkNet)?.room || [];
    const roomPlus30 =
      listPlus30.find((item) => item.nameType === linkNet)?.room || [];
    const room120 =
      list120.find((item) => item.nameType === linkNet)?.room || [];
    const room135 =
      list135.find((item) => item.nameType === linkNet)?.room || [];
    const room20 = list20.find((item) => item.nameType === linkNet)?.room || [];

    const yawMultiplier = room180.includes(link) ? -1 : 1;
    const additionalRotation = room90.includes(link)
      ? -90
      : roomPlus90.includes(link)
      ? 90
      : room270.includes(link)
      ? -270
      : room360.includes(link)
      ? 360
      : room30.includes(link)
      ? -30
      : roomPlus30.includes(link)
      ? 30
      : room120.includes(link)
      ? -120
      : room135.includes(link)
      ? -135
      : room20.includes(link)
      ? -20
      : 180;

    return (
      (yawMultiplier * currentYawRadians * 180) / Math.PI + additionalRotation
    );
  };

  // useEffect để cập nhật rotation mỗi khi góc yaw thay đổi
  useEffect(() => {
    if (prevYaw !== null) {
      let delta = convertYawToDeg(numberRotate) - prevYaw;
      if (delta > 180) delta -= 360;
      else if (delta < -180) delta += 360;

      setRotation((prev) => prev + delta);
    } else {
      setRotation(convertYawToDeg(numberRotate));
    }

    setPrevYaw(convertYawToDeg(numberRotate));
  }, [numberRotate]);

  return (
    <DotContainer
      p={paddingSize}
      borderRadius="50%"
      width={size}
      height={size}
      isSelected={isSelected}
      onClick={handleNavigator}
      onTouchStart={handleNavigator}
      position="absolute"
      top={top}
      left={left}
    >
      {/* Vòng tròn Dot */}
      <DotCircle isSelected={isSelected} />

      {/* Ảnh không bị ảnh hưởng bởi hiệu ứng của Dot */}
      {isSelected && (
        <ImageContainer isZoom={isZoom} rotation={rotation}>
          <Image src={radio} style={{ objectFit: "contain" }} />
        </ImageContainer>
      )}
    </DotContainer>
  );
};

// Styled-components

const DotContainer = styled(Box)<{ isSelected: boolean }>`
  transition: all 0.3s ease;
  background: #ffffff66;
  cursor: pointer;
  opacity: ${(props) => (props.isSelected ? 1 : 0.3)};
  box-shadow: ${(props) =>
    props.isSelected
      ? "0 0 15px rgba(159, 187, 155, 0.8)"
      : "0 0 5px rgba(0, 0, 0, 0.2)"};
  animation: ${(props) => (props.isSelected ? "pulse 1.5s infinite" : "none")};

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 10px rgba(159, 187, 155, 0.6);
    }
    50% {
      transform: scale(1.2);
      box-shadow: 0 0 20px rgba(159, 187, 155, 1);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 10px rgba(159, 187, 155, 0.6);
    }
  }
`;

const DotCircle = styled(Box)<{ isSelected: boolean }>`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.isSelected ? "#5bab50" : "#fff")};
`;

// Tạo một Box riêng chứa ảnh, không bị ảnh hưởng bởi hiệu ứng DotContainer
const ImageContainer = styled(Box)<{ isZoom: boolean; rotation: number }>`
  position: absolute;
  left: 50%;
  top: ${(props) => (props.isZoom ? "-2rem" : "-1.5rem")};
  width: ${(props) => (props.isZoom ? "5rem" : "3rem")};
  transform: translateX(-50%) rotate(${(props) => props.rotation}deg);
  transform-origin: center bottom;
  transition: transform 0.3s ease;
`;

export default AddressDot;
