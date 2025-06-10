import FloorPlan from "@assets/svgs/floorPlan";
import Info from "@assets/svgs/info";
import Menu from "@assets/svgs/menu";
import { Stack } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ButtonCustom from "../button-custom";

interface IControl {
  setIsControl: Dispatch<
    SetStateAction<{
      isMenu: boolean;
      isFloorPlan: boolean;
      isInfo: boolean;
    }>
  >;
  isControl: {
    isMenu: boolean;
    isFloorPlan: boolean;
    isInfo: boolean;
  };
}

const Control = ({ isControl, setIsControl }: IControl) => {
  const [size, setSize] = useState<string>("4rem");

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1535) {
        setSize("3rem"); // Màn hình lớn
      } else if (window.innerWidth >= 1200) {
        setSize("2.8rem"); // Tablet
      } else if (window.innerWidth >= 768) {
        setSize("2.4rem"); // Tablet
      } else {
        setSize("2.2rem"); // Mobile
      }
    };

    updateSize(); // Cập nhật ngay lần đầu
    window.addEventListener("resize", updateSize); // Lắng nghe sự kiện resize
    return () => window.removeEventListener("resize", updateSize); // Cleanup
  }, []);
  return (
    <Stack
      direction={"column"}
      gap={"3.2rem"}
      width={"fit-content"}
      height={"fit-content"}
      position={"absolute"}
      top={"50%"}
      left={"2rem"}
      style={{
        transform: "translateY(-50%)",
      }}
      zIndex={10000000}
    >
      <ButtonCustom
        icon={<FloorPlan width={size} height={size} />}
        size={{ xl: "8rem", lg: "7rem", sm: "6rem", base: "5rem" }}
        isSelected={isControl.isFloorPlan}
        onClick={() => {
          setIsControl((prev) => ({ ...prev, isFloorPlan: !prev.isFloorPlan }));
        }}
      />
      <ButtonCustom
        icon={<Menu width={size} height={size} />}
        size={{ xl: "8rem", lg: "7rem", sm: "6rem", base: "5rem" }}
        isSelected={isControl.isMenu}
        onClick={() => {
          setIsControl((prev) => ({ ...prev, isMenu: !prev.isMenu }));
        }}
      />
      <ButtonCustom
        icon={<Info width={size} height={size} />}
        size={{ xl: "8rem", lg: "7rem", sm: "6rem", base: "5rem" }}
        isSelected={isControl.isInfo}
        onClick={() => {
          setIsControl((prev) => ({ ...prev, isInfo: !prev.isInfo }));
        }}
      />
    </Stack>
  );
};

export default Control;
