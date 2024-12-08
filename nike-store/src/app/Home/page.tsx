// src/app/home/page.tsx  
import React from 'react';  
import Header from '../Components/Header';  
import Footer from '../Components/Footer';  
import ProductCard from '../Components/ProductCard';  
import FeaturedSection from '../Components/FeaturedSection';  
import EssentialsSection from '../Components/EssentialsSection';  

const HomePage: React.FC = () => {  
  return (  
    <div>  
      <Header />  
      <main>  
        <section className="text-center py-8">  
          <img src="/images/air-max-pulse.jpg" alt="Nike Air Max Pulse" className="w-full h-96 object-cover"/>  
          <h1 className="text-3xl font-bold mt-4">First Look</h1>  
          <h2 className="text-2xl font-semibold">NIKE AIR MAX PULSE</h2>  
          <p className="mt-2">Extreme comfort. Hyper durable. Max volume.</p>  
          <p>Introducing the Air Max Pulse—designed to push you past your limits and help you go to the max.</p>  
          <button className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">  
            Notify Me  
          </button>  
        </section>  
        <section className="container mx-auto py-8">  
          <h2 className="text-2xl font-bold text-center mb-6">Best of Air Max</h2>  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
            <ProductCard   
              imageUrl="/images/air-max-pulse.jpg"   
              title="Nike Air Max Pulse"  
              price="₹ 13,995"   
              description="Women's Shoes"   
            />  
            <ProductCard   
              imageUrl="/images/air-max-pulse.jpg"   
              title="Nike Air Max Pulse"  
              price="₹ 13,995"   
              description="Men's Shoes"   
            />  
            <ProductCard   
              imageUrl="/images/air-max-97.png"   
              title="Nike Air Max 97 SE"  
              price="₹ 16,995"   
              description="Men's Shoes"   
            />  
          </div>  
        </section>  
        <section className="text-center py-8">  
          <img src="/images/running-feature.jpg" alt="Featured Running" className="w-full h-96 object-cover"/>  
          <Footer />  
        </section>  
      </main>  
    </div>  
  );      
  return (  
    <div>  
      <Header />  
      <main>  
        <FeaturedSection />  
        <EssentialsSection />  
      </main>  
      <Footer />  
    </div>  
  );  
};  
export default HomePage;