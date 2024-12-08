// src/app/components/CheckoutForm.tsx  
import React, { useState } from 'react';  

const CheckoutForm: React.FC = () => {  
  const [formData, setFormData] = useState({  
    firstName: '',  
    lastName: '',  
    address1: '',  
    address2: '',  
    postalCode: '',  
    email: '',  
    phone: '',  
    pan: '',  
  });  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    const { name, value } = e.target;  
    setFormData({ ...formData, [name]: value });  
  };  

  return (  
    <div className="bg-white p-6 rounded-lg shadow-md">  
      <h2 className="text-xl font-bold mb-4">Enter your name and address:</h2>  
      <input  
        type="text"  
        name="firstName"  
        placeholder="First Name"  
        className="border p-2 mb-4 w-full"  
        value={formData.firstName}  
        onChange={handleChange}  
      />  
      <input  
        type="text"  
        name="lastName"  
        placeholder="Last Name"  
        className="border p-2 mb-4 w-full"  
        value={formData.lastName}  
        onChange={handleChange}  
      />  
      <input  
        type="text"  
        name="address1"  
        placeholder="Address Line 1"  
        className="border p-2 mb-4 w-full"  
        value={formData.address1}  
        onChange={handleChange}  
      />  
      <input  
        type="text"  
        name="address2"  
        placeholder="Address Line 2"  
        className="border p-2 mb-4 w-full"  
        value={formData.address2}  
        onChange={handleChange}  
      />  
      <input  
        type="text"  
        name="postalCode"  
        placeholder="Postal Code"  
        className="border p-2 mb-4 w-full"  
        value={formData.postalCode}  
        onChange={handleChange}  
      />  
      <input  
        type="text"  
        name="state"  
        placeholder="State/Territory"  
        className="border p-2 mb-4 w-full"  
      />  
      <input  
        type="email"  
        name="email"  
        placeholder="Email"  
        className="border p-2 mb-4 w-full"  
        value={formData.email}  
        onChange={handleChange}  
      />  
      <input  
        type="text"  
        name="phone"  
        placeholder="Phone Number"  
        className="border p-2 mb-4 w-full"  
        value={formData.phone}  
        onChange={handleChange}  
      />  
      <input  
        type="text"  
        name="pan"  
        placeholder="PAN"  
        className="border p-2 mb-4 w-full"  
        value={formData.pan}  
        onChange={handleChange}  
      />  
      <div className="mt-4">  
        <label>  
          <input type="checkbox" /> Save this address to my profile  
        </label>  
      </div>  
    </div>  
  );  
};  

export default CheckoutForm;