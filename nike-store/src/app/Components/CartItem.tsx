// src/app/components/CartItem.tsx  
import React from 'react';  

interface CartItemProps {  
  name: string;  
  description: string;  
  price: string;  
  imageUrl: string;  
  quantity: number;  
}  

const CartItem: React.FC<CartItemProps> = ({ name, description, price, imageUrl, quantity }) => {  
  return (  
    <div className="flex items-center p-4 border-b">  
      <img src={imageUrl} alt={name} className="w-24 h-24 object-cover rounded mr-4" />  
      <div className="flex-1">  
        <h2 className="font-bold">{name}</h2>  
        <p>{description}</p>  
        <p className="text-gray-600">Size: <span className="font-semibold">L</span></p>  
        <p className="text-gray-600">Quantity: <span className="font-semibold">{quantity}</span></p>  
      </div>  
      <span className="font-bold">{price}</span>  
    </div>  
  );  
};  

export default CartItem;