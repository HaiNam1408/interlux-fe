import { Stack } from '@chakra-ui/react'
import ModelProduct from './components/model-product'
import DetailProduct from './components/detail-product'
import InfoProduct from './components/infor-product'
import Variations from './components/variations-product'
import FooterLogin from '@pages/login/components/footer-login'

const ProductDetail = () => {
  return (
    <Stack width={"100%"} height={"fit-content"} minH={"100dvh"} position={"relative"}>
      <ModelProduct/>
      <DetailProduct/>
      <InfoProduct/>
      <Variations/>
       <FooterLogin />
    </Stack>
  )
}

export default ProductDetail
