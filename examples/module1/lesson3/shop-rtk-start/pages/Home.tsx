import Product from '../components/Product';
import { useAppDispatch, useAppSelector } from '../hooks/rtk';
import React, { useEffect } from 'react';
import { fetchProducts, selectProducts } from '../state/productSlice';
import { Product as ProductType } from '../types/Product';

const Home = () => {
  const dispatch = useAppDispatch();
  const products: ProductType[] = useAppSelector(selectProducts);
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts())
        .unwrap()
        .then(() => {
          console.log('Products fetched successfully');
        })
        .catch((error) => {
          console.error('Failed to fetch products:', error);
        });
    }
  }, [dispatch, products.length]);

  console.log(products);

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
