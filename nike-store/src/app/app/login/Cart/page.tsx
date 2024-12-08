// src/app/cart/page.tsx  
import React from 'react';  
import Header from '../components/Header';  
import CartItem from '../components/CartItem';  
import CartSummary from '../components/CartSummary';  
import Footer from '../components/Footer';  

const CartPage: React.FC = () => {  
  return (  
    <div>  
      <Header />  
      <div className="container mx-auto p-6">  
        <h1 className="text-2xl font-bold mb-6">Bag</h1>  
        <CartItem   
          name="Nike Dri-FIT ADV TechKnit Ultra"  
          description="Men's Short-Sleeve Running Top"  
          price="₹ 3,895.00"  
          imageUrl="/images/product1.jpg"  
          quantity={1}  
        />  
        <CartItem   
          name="Nike Air Max 97 SE"  
          description="Men's Shoes"  
          price="₹ 16,995.00"  
          imageUrl="/images/product2.jpg"  
          quantity={1}  
        />  
        <CartSummary   
          subtotal="₹ 20,890.00"  
          delivery="Free"  
          total="₹ 20,890.00"  
        />  
      </div>  
      <Footer />  
    </div>  
  );  
};  

export default CartPage;