import React from 'react'
import { useNavigate } from 'react-router-dom'
import BestGear from '../../components/best-audio-gear'
import CategoriesList from '../../components/navbar/categories'
import data from '../../data/data.json'
import OtherProducts from './other-optional-products'
import ProductInfo from './products-info'
import ProductOverview from './product-overview'

export default function ProductPage({ productId }) {
    const navigate = useNavigate();
    const productData = data.find(({ slug }) => slug === productId);
  
    if (!productData) {
      
      return null;
    }
  
    const productName = productData.name.substring(0, productData.name.lastIndexOf(' '));
  
    return (
      
      <div className="pb-20">
         
        <section className="section-padding mt-4 mb-6 tablet:mt-8 desktop:mt-20 desktop:mb-14">
          <button 
            onClick={() => navigate(-1)} 
            className="text-dark/50 font-bold hover:text-accent transition-colors"
          >
            Go Back
          </button>
        </section>
         
        <ProductOverview productData={productData} productName={productName} />
        <ProductInfo productData={productData} />
        <OtherProducts productData={productData} />
  
        <div className="mt-40">
          <CategoriesList closeNav={() => {}} />
        </div>
        <div className="mt-20">
          <BestGear />
        </div>
      </div>
    );
}