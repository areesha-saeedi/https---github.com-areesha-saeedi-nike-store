// src/app/components/OrderSummary.tsx  
import React from 'react';  

interface OrderSummaryProps {  
  subtotal: string;  
  delivery: string;  
  total: string;  
}  

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, delivery, total }) => {  
  return (  
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">  
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>  
      <p>Subtotal: <strong>{subtotal}</strong></p>  
      <p>Delivery/Shipping: <strong>{delivery}</strong></p>  
      <p className="text-lg font-bold">Total: <strong>{total}</strong></p>  
      <div className="mt-4">  
        <h3 className="font-semibold">Arrives:</h3>  
        <p>Monday, 27 Mar - Wed, 12 Apr</p>  
      </div>  
      <img src="/images/product-image.jpg" alt="Product" className="mt-4 w-full" />  
    </div>  
  );  
};  

export default OrderSummary;