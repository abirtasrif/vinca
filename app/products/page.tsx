import Packages from '@/components/packages/Packages';
import Products from '@/components/products/Products';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Products fromProductPage />
      </main>
      <FooterMini />
    </>
  );
};

export default ProductsPage;
