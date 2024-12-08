// src/app/components/EssentialsSection.tsx  
import React from 'react';  
import ProductCard from './ProductCard';  

const EssentialsSection: React.FC = () => {  
  return (  
    <section className="py-8">  
      <h2 className="text-2xl font-bold text-center mb-4">The Essentials</h2>  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">  
        <ProductCard   
          imageUrl="/images/essentials-mens.jpg"  
          title="Men's Collection"  
          price="Starting at ₹ 3,500"  
          description="Explore men's essentials"  
        />  
        <ProductCard   
          imageUrl="/images/essentials-womens.jpg"  
          title="Women's Collection"  
          price="Starting at ₹ 3,500"  
          description="Explore women's essentials"  
        />  
        <ProductCard   
          imageUrl="/images/essentials-kids.jpg"  
          title="Kids' Collection"  
          price="Starting at ₹ 2,500"  
          description="Explore kids' essentials"  
        />  
      </div>  
    </section>  
  );  
};  

export default EssentialsSection;