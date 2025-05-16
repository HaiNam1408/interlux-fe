import { Stack } from '@chakra-ui/react'
import ModelProduct from './components/model-product'
import DetailProduct from './components/detail-product'
import InfoProduct from './components/infor-product'
import Variations from './components/variations-product'
import FooterLogin from '@pages/login/components/footer-login'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import LoadingScreen from '@components/loading-screen'
import { getProduct } from '@apis/product.api'
import { useDispatch } from 'react-redux'
import { setProduct } from '@redux/reducer/product.reducer'

const ProductDetail = () => {
  const navigator = useNavigate()
  const dispatch = useDispatch()
  const { "id-product": productId } = useParams();
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true);
    if (productId) {
      getProduct(productId).then((res) => dispatch(setProduct(res.data.data))).finally(() => setLoading(false))
    } else {
      navigator(-1)
    }
  }, [])

  return (
    <Stack width={"100%"} height={"fit-content"} minH={"100dvh"} position={"relative"}>
      <LoadingScreen isLoading={loading} />
      <ModelProduct />
      <DetailProduct />
      <InfoProduct />
      <Variations />
      <FooterLogin />
    </Stack>
  )
}

export default ProductDetail
