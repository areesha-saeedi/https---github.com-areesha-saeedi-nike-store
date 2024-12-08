// src/app/components/ProductDetail.tsx  
import React from 'react';  

interface ProductDetailProps {  
  imageUrl: string;  
  title: string;  
  description: string;  
  price: string;  
}  

const ProductDetail: React.FC<ProductDetailProps> = ({ imageUrl, title, description, price }) => {  
  return (  
    <div className="container mx-auto flex flex-col md:flex-row p-4">  
      <div className="w-full md:w-1/2 mb-4">  
        <img src={imageUrl} alt={title} className="w-full h-auto" />  
      </div>  
      <div className="w-full md:w-1/2 px-4">  
        <h2 className="text-xl font-bold mb-2">{title}</h2>  
        <p className="mb-4">{description}</p>  
        <p className="text-lg font-bold mb-4">{price}</p>  
        <button className="bg-black text-white px-4 py-2 rounded">Add To Cart</button>  
      </div>  
    </div>  
  );  
};  

export default ProductDetail;