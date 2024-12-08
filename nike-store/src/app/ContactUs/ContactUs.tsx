 
import React from 'react';  

const ContacUs: React.FC = () => {
  return (  
    <div className="container mx-auto p-6">  
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>  
      <p className="text-center mb-8">  
        We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.  
      </p>  
      <form className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">  
        <div className="mb-4">  
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">  
            Name  
          </label>  
          <input  
            type="text"  
            id="name"  
            required  
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"  
          />  
        </div>  
        <div className="mb-4">  
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">  
            Email  
          </label>  
          <input  
            type="email"  
            id="email"  
            required  
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"  
          />  
        </div>  
        <div className="mb-4">  
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">  
            Message  
          </label>  
          textarea 
            id="message"  
            rows={4}  
            required  
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"  
            
        </div>  
        <button  
          type="submit"  
          className="w-full p-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"  
        >  
          Send Message  
        </button>  
      </form>  
    </div>  
  );     
  return (  
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">  
      <h2 className="text-2xl font-bold mb-6">CONTACT US</h2>  
      <p>Customer Service: <strong>000 800 919 0566</strong></p>  
      <p>Products & Orders: 24 hours a day, 7 days a week</p>  
      <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>  
      <div className="flex space-x-4 mt-6">  
        <img src="/images/phone-icon.png" alt="Phone Icon" width={24} height={24} />  
        <span>24 hours a day, 7 days a week</span>  
      </div>  
      <p>We'll reply within five business days.</p>  
      <div className="flex items-center mt-4">  
        <img src="/images/email-icon.png" alt="Email Icon" width={24} height={24} />  
        <span className="ml-2">Send us an email</span>  
      </div>  
      <div className="flex items-center mt-4">  
        <img src="/images/store-icon.png" alt="Store Icon" width={24} height={24} />  
        <span className="ml-2">STORE LOCATOR</span> - Find Nike retail stores near you.  
      </div>  
    </div>  
  );  
}; 

export default ContactUs;