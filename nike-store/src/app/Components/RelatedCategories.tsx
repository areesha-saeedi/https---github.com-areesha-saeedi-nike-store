// src/app/components/RelatedCategories.tsx  
import React from 'react';  

const categories = [  
  'Best Selling Products',  
  'Best Shoes',  
  'New Basketball Shoes',  
  'New Football Shoes',  
  'New Men\'s Shoes',  
  'New Running Shoes',  
  'Best Women\'s Shoes',  
  'Best Training & Gym'  
];  

const RelatedCategories: React.FC = () => {  
  return (  
    <div className="my-8">  
      <h2 className="font-bold text-lg">Related Categories</h2>  
      <div className="flex flex-wrap gap-2 mt-2">  
        {categories.map((category) => (  
          <button key={category} className="border px-3 py-2 rounded-lg hover:bg-gray-200">  
            {category}  
          </button>  
        ))}  
      </div>  
    </div>  
  );  
  
};  

export default RelatedCategories;