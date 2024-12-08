  
import React from 'react';  

const FeaturedSection: React.FC = () => {  
  return (  
    <section className="py-8">  
      <h2 className="text-2xl font-bold text-center mb-4">Don't Miss</h2>  
      <div className="flex flex-col md:flex-row justify-around items-center">  
        <img src="/images/dont-miss-1.jpg" alt="Model 1" className="w-full md:w-1/2 h-auto mb-4 md:mb-0"/>  
        <img src="/images/dont-miss-2.jpg" alt="Model 2" className="w-full md:w-1/2 h-auto"/>  
      </div>  
    </section>  
  );  
};  

export default FeaturedSection;