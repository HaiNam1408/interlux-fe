
import ContentDetail from './components/content-detail'
import ContentSub from './components/content-sub';

interface IProductDetail {
  data: {
    color: string;
    configuration: string;
    cushionFirmness: string;
    addOns: string[];
    description: string;
  };
}

const ProductDetail = ({data}:IProductDetail) => {
  return (
    <>
      <ContentDetail data={data}/>
      <ContentSub/>
    </> 
  )
}

export default ProductDetail
