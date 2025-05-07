import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";
import SplitText from "@components/split-text";
import { Center, Image } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface IContentDis {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  currentIndex: number;
}

const ContentDis = ({ setCurrentIndex, currentIndex }: IContentDis) => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(currentIndex); // Chuyển đến slide tương ứng
    }
  }, [currentIndex]);

  return (
    <Swiper
      ref={swiperRef}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      speed={2000}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[Autoplay, EffectCoverflow]}
      className="mySwiper"
      style={{
        width: "100%",
        height: "100%",
      }}
      onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
    >
      {[
        "https://cdn.ferrari.com/cms/network/media/img/resize/680f72b045c5af002153fd67-ferrari-296-speciale-2025-cover-gtw-desk?width=1920&height=1080",
        "https://cdn.ferrari.com/cms/network/media/img/resize/67cecfe5dc45cc0020bf6801-2025-ferrari-sfda-header-desk?width=1920&height=1080",
        "https://cdn.ferrari.com/cms/network/media/img/resize/649c429dff73dc0024751960-ferrari-esports-team-header-menu-port?width=1920&height=1080",
        "https://cdn.ferrari.com/cms/network/media/img/resize/67b311de596e810010250526-ferrari-499-p-header-menu-2025?width=1920&height=1080",
      ].map((item, index) => (
        <SwiperSlide key={index} style={{ position: "relative" }}>
          <Image
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
            src={item}
            loading="lazy"
          ></Image>
          <Center
            width={"100%"}
            height={"fit-content"}
            position={"absolute"}
            left={0}
            bottom={"20%"}
            zIndex={1}
          >
            <SplitText
              text="PURE DRIVING PLEASURE"
              className="text-[4.6rem] font-semibold text-center text-[#fff] text-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
              delay={150}
              animationFrom={{
                opacity: 0,
                transform: "translate3d(0,50px,0)",
              }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </Center>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContentDis;
