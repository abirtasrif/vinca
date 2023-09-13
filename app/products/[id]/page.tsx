import ProductDetailsSection from '@/components/product-details/ProductDetailsSection';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';
import { productsData } from '@/data/products';
import { productItem } from '@/types/productItem';

const ProductsDetailsPage = ({ params }: { params: { id: string } }) => {
  const singleProduct = productsData.find(
    (item: productItem) => item.id === +params.id
  );

  if (!singleProduct) {
    return null;
  }

  return (
    <>
      <Navbar />
      <ProductDetailsSection product={singleProduct} />
      <FooterMini />
    </>
  );
};

export default ProductsDetailsPage;
