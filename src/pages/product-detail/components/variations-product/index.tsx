import { getRelatedProduct } from "@apis/product.api"
import { Stack, Text } from "@chakra-ui/react"
import { IProduct } from "@interfaces/IProduct.interface"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import CardProduct from "@pages/products/components/content/components/card-product"

const Variations = () => {
  const navigator = useNavigate()
  const { "id-product": productId } = useParams();
  const [relatedProduct, setReLatedProduct] = useState<IProduct[]>([])

  useEffect(() => {
    getRelatedProduct(productId || "").then((res) => setReLatedProduct(res.data.data))
  }, [])

  return (
    <>
      {relatedProduct.length > 0 ? (
        <Stack
          width="100%"
          height="fit-content"
          direction="column"
          position="relative"
          maxW="140rem"
          margin="2rem auto"
          px="2rem"
          gap={0}
        >
          <Text
            py="2rem"
            width="100%"
            fontSize="2.6rem"
            fontFamily="tinos"
            fontWeight={700}
          >
            Related products
          </Text>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {relatedProduct.map((item, index) => <SwiperSlide key={index} onClick={() => navigator(`product-detail/${item.id}`)}><CardProduct data={item} /></SwiperSlide>)}
          </Swiper>
        </Stack>
      ) : null}
    </>
  )
}

export default Variations
