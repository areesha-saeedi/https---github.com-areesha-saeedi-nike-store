  
import React from 'react';  

interface ProductCardProps {  
  imageUrl: any;  
  title: any;  
  price: any;  
  description: any;  
}  

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price, description }) => {  
  return (  
    <div className="border rounded shadow-md overflow-hidden">  
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>  
      <div className="p-4">  
        <h3 className="font-semibold">{title}</h3>  
        <p className="text-gray-600">{description}</p>  
        <p className="font-bold">{price}</p>  
        <button className="mt-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">  
          Shop Now  
        </button>  
      </div>  
    </div>  
  );  
    return (  
      <div className="border rounded shadow-md overflow-hidden p-4">  
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-2"/>  
        <h3 className="font-semibold">{title}</h3>  
        <p className="text-gray-600">{description}</p>  
        <p className="font-bold">{price}</p>  
        <button className="mt-2 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">  
          Shop Now  
        </button>  
      </div>  
    );  
    return (  
        <div className="border rounded shadow-md overflow-hidden">  
          <img src={imageUrl} alt={title} className="w-full h-56 object-cover"/>  
          <div className="p-4">  
            <h3 className="font-semibold">{title}</h3>  
            <p className="font-bold">{price}</p>  
          </div>  
        </div>  
      );  
      return (  
        <div className="border rounded shadow-md overflow-hidden p-4">  
          <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>  
          <h3 className="font-semibold mt-2">{title}</h3>  
          <p className="text-gray-600">{price}</p>  
        </div>  
      );  
      return (  
        <div className="border rounded-md p-4 shadow-md text-center">  
          <img src={imageUrl} alt={title} className="w-full h-60 object-cover mb-4" />  
          <h3 className="font-semibold">{title}</h3>  
          <p className="text-gray-500">{description}</p>  
          <p className="font-bold mt-2">{price}</p>  
        </div>  
      );  
  };  
  

export default ProductCard