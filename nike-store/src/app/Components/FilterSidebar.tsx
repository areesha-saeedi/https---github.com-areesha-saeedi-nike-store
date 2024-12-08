// src/app/components/FilterSidebar.tsx  
import React from 'react';  

const FilterSidebar: React.FC = () => {  
  return (  
    <aside className="w-1/4 p-4 border-r">  
      <h2 className="font-bold mb-2">Gender</h2>  
      <div>  
        <label><input type="checkbox" /> Men</label><br />  
        <label><input type="checkbox" /> Women</label><br />  
        <label><input type="checkbox" /> Unisex</label><br />  
      </div>  
      <h2 className="font-bold mt-4 mb-2">Kids</h2>  
      <div>  
        <label><input type="checkbox" /> Boys</label><br />  
        <label><input type="checkbox" /> Girls</label><br />  
      </div>  
      <h2 className="font-bold mt-4 mb-2">Shop By Price</h2>  
      <div>  
        <label><input type="checkbox" /> Under ₹ 2,500</label><br />  
        <label><input type="checkbox" /> ₹ 2,501 - ₹ 5,000</label><br />  
      </div>  
    </aside>  
  );  
  return (  
    <aside className="w-1/4 p-4 border-r">  
      <h2 className="font-bold mb-2">Filters</h2>  
      {/* Filter options can be added here */}  
      <h3 className="mt-4 mb-2">Categories</h3>  
      <div>  
        <label><input type="checkbox" /> Men's Shoes</label><br />  
        <label><input type="checkbox" /> Women's Shoes</label><br />  
        <label><input type="checkbox" /> Kids' Shoes</label><br />  
      </div>  
    </aside>  
  );  
};  

export default FilterSidebar;