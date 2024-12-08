// src/app/components/SignUpForm.tsx  
import React from 'react';  

const SignUpForm: React.FC = () => {  
  return (  
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">  
      <h2 className="text-center text-2xl font-bold mb-4">BECOME A NIKE MEMBER</h2>  
      <p className="text-center mb-4">  
        Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.  
      </p>  
      <form>  
        <div className="mb-4">  
          <label className="block mb-1" htmlFor="email">Email address</label>  
          <input type="email" id="email" className="w-full p-2 border rounded" required />  
        </div>  
        <div className="mb-4">  
          <label className="block mb-1" htmlFor="password">Password</label>  
          <input type="password" id="password" className="w-full p-2 border rounded" required />  
        </div>  
        <div className="mb-4">  
          <label className="block mb-1" htmlFor="firstName">First Name</label>  
          <input type="text" id="firstName" className="w-full p-2 border rounded" required />  
        </div>  
        <div className="mb-4">  
          <label className="block mb-1" htmlFor="lastName">Last Name</label>  
          <input type="text" id="lastName" className="w-full p-2 border rounded" required />  
        </div>  
        <div className="mb-4">  
          <label className="block mb-1" htmlFor="dob">Date of Birth</label>  
          <input type="date" id="dob" className="w-full p-2 border rounded" required />  
        </div>  
        <div className="mb-4">  
          <label className="block mb-1" htmlFor="country">Country</label>  
          <select id="country" className="w-full p-2 border rounded">  
            <option>India</option>  
            <option>USA</option>  
            <option>UK</option>  
            {/* Add more countries as needed */}  
          </select>  
        </div>  
        <div className="mb-4">  
          <label className="block mb-1">Gender</label>  
          <div>  
            <label className="mr-4"><input type="radio" name="gender" value="male" /> Male</label>  
            <label><input type="radio" name="gender" value="female" /> Female</label>  
          </div>  
        </div>  
        <div className="mb-4">  
          <input type="checkbox" id="updates" className="mr-2" />  
          <label htmlFor="updates">Sign up for emails to get updates from Nike on products, offers and your Member benefits.</label>  
        </div>  
        <button type="submit" className="w-full bg-black text-white font-semibold py-2 rounded">  
          JOIN US  
        </button>  
        <div className="text-center mt-4">  
          <p>Already a member? <a href="#" className="text-blue-600 hover:underline">Sign In.</a></p>  
        </div>  
      </form>  
    </div>  
  );  
};  

export default SignUpForm;