// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Box } from "@chakra-ui/react";
import CardBlog from "./components/card-blog";

const listBlog = [
  {
    img: "https://cdn.ferrari.com/cms/network/media/img/resize/67698e9c1570fd0010b77417-superheader-scuderia-desk?width=1920&height=1080",
    title: "Italian Inspired Dining",
    sub: "Elegant dining furniture inspired by Italian craftsmanship, perfect for creating memorable dining experiences",
  },
  {
    img: "https://cdn.ferrari.com/cms/network/media/img/resize/67698e9c1570fd0010b77417-superheader-scuderia-desk?width=1920&height=1080",
    title: "Italian Inspired Dining",
    sub: "Elegant dining furniture inspired by Italian craftsmanship, perfect for creating memorable dining experiences",
  },
  {
    img: "https://cdn.ferrari.com/cms/network/media/img/resize/67698e9c1570fd0010b77417-superheader-scuderia-desk?width=1920&height=1080",
    title: "Italian Inspired Dining",
    sub: "Elegant dining furniture inspired by Italian craftsmanship, perfect for creating memorable dining experiences",
  },
  {
    img: "https://cdn.ferrari.com/cms/network/media/img/resize/67698e9c1570fd0010b77417-superheader-scuderia-desk?width=1920&height=1080",
    title: "Italian Inspired Dining",
    sub: "Elegant dining furniture inspired by Italian craftsmanship, perfect for creating memorable dining experiences",
  },
  {
    img: "https://cdn.ferrari.com/cms/network/media/img/resize/67698e9c1570fd0010b77417-superheader-scuderia-desk?width=1920&height=1080",
    title: "Italian Inspired Dining",
    sub: "Elegant dining furniture inspired by Italian craftsmanship, perfect for creating memorable dining experiences",
  },
  {
    img: "https://cdn.ferrari.com/cms/network/media/img/resize/67698e9c1570fd0010b77417-superheader-scuderia-desk?width=1920&height=1080",
    title: "Italian Inspired Dining",
    sub: "Elegant dining furniture inspired by Italian craftsmanship, perfect for creating memorable dining experiences",
  },
];

const Blog = () => {
  return (
    <Box width={"100%"} height={"fit-content"} p={"4rem 3rem"}>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {listBlog.map((item, index) => (
          <SwiperSlide key={index}>
            <CardBlog imgCard={item.img} title={item.title} sub={item.sub} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Blog;
