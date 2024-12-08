// src/app/checkout/page.tsx  
import React from 'react';  
import Header from '../Components/Header';  
import CheckoutForm from '../Components/CheckoutForm';  
import OrderSummary from '../Components/OrderSummary';  
import Footer from '../Components/Footer';  

const CheckoutPage: React.FC = () => {  
  return (  
    <div>  
      <Header />  
      <div className="container mx-auto p-6 flex">  
        <div className="w-2/3 pr-4">  
          <CheckoutForm />  
        </div>  
        <div className="w-1/3">  
          <OrderSummary subtotal="₹ 20,890.00" delivery="Free" total="₹ 20,890.00" />  
        </div>  
      </div>  
      <Footer />  
    </div>  
  );  
};  

export default CheckoutPage;