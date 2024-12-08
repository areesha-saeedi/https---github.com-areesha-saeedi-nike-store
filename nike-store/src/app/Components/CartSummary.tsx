// src/app/components/CartSummary.tsx  
import React from 'react';  

interface CartSummaryProps {  
  subtotal: string;  
  delivery: string;  
  total: string;  
}  

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, delivery, total }) => {  
  return (  
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">  
      <h2 className="text-xl font-bold">Summary</h2>  
      <p>Subtotal: <strong>{subtotal}</strong></p>  
      <p>Estimated Delivery & Handling: <strong>{delivery}</strong></p>  
      <p className="text-lg font-bold">Total: <strong>{total}</strong></p>  
      <button className="mt-4 w-full bg-black text-white font-semibold py-2 rounded">  
        Member Checkout  
      </button>  
    </div>  
  );  
};  

export default CartSummary;