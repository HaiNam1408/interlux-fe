// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Box } from "@chakra-ui/react";
import CardBlog from "./components/card-blog";
import { useEffect, useState } from "react";
import { IBlogPost } from "@interfaces/IBlog.interface";
import { getListBlog } from "@apis/blog.api";

const Blog = () => {
  const [listBlog, setListBlog] = useState<IBlogPost[]>([]);

  useEffect(() => {
    getListBlog().then((res) => {
      setListBlog(res.data.data.data);
    });
  }, []);

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
        {(listBlog ?? []).map((item, index) => (
          <SwiperSlide key={index} style={{ height: "100%" }}>
            <CardBlog
              imgCard={item.thumbnail.filePath}
              title={item.title}
              sub={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Blog;
