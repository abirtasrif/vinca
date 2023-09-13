import { productItem } from '@/types/productItem';

interface ProductDetailsSectionProps {
  product: productItem;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
  product,
}) => {
  return (
    <section className='wrapper section-padding'>ProductDetailsSection</section>
  );
};

export default ProductDetailsSection;
