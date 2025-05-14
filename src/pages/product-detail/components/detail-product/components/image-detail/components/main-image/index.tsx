import { Box, Image } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface IMainImage {
  setSelectedImg: Dispatch<SetStateAction<string>>;
  selectedImg: string;
  listImg: string[];
}

const MainImage = ({ listImg, selectedImg, setSelectedImg }: IMainImage) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const index = listImg.indexOf(selectedImg);
    if (swiperRef.current && index !== -1) {
      swiperRef.current.slideTo(index);
    }
  }, [selectedImg, listImg]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  return (
    <Box width={"80%"} pl={"2rem"} height={"fit-content"}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          const currentImg = listImg[swiper.activeIndex];
          setSelectedImg(currentImg);
        }}
      >
        {listImg.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              overflow="hidden"
            >
              <Image
                src={item}
                width="100%"
                height="auto"
                objectFit="contain"
                transition="transform 0.3s ease"
                transform={isHovering ? "scale(2)" : "scale(1)"}
                style={{ transformOrigin }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MainImage;
