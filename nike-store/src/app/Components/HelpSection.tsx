// src/app/components/HelpSection.tsx  
import React from 'react';  

const HelpSection: React.FC = () => {  
  return (  
    <section className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">  
      <h1 className="text-3xl font-bold mb-6 text-center">GET HELP</h1>  
      <div className="mb-4">  
        <input   
          type="text"   
          placeholder="What can we help you with?"   
          className="w-full p-2 border rounded"  
        />  
      </div>  
      <h2 className="text-xl font-semibold mb-3">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>  
      <p>  
        We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:  
      </p>  
      <ul className="list-disc list-inside mb-4">  
        <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>  
        <li>PayTM</li>  
        <li>Apple Pay</li>  
      </ul>  
      <p>  
        Nike Members can store multiple debit or credit cards in their profile for faster checkout.  
        If you’re not already a Member, <a href="#join" className="text-blue-600">join us</a> today.  
      </p>  

      <h2 className="text-xl font-semibold mt-6">FAQs</h2>  
      <p className="font-semibold">Does my card need international purchases enabled?</p>  
      <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>  
      <p className="font-semibold">Can I pay for my order with multiple methods?</p>  
      <p>No, Nike orders can't be split between multiple payment methods.</p>  
      <p className="font-semibold">What payment method is accepted for SNKRS orders?</p>  
      <p>You can use any accepted credit card to pay for your SNKRS order.</p>  
      <p className="font-semibold">Why don’t I see Apple Pay as an option?</p>  
      <p>To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a compatible Apple device running the latest iOS, be signed in to your iCloud account and have a supported card in your Wallet.</p>  

      <h3 className="font-semibold mt-4">Was this answer helpful?</h3>  
      <div className="flex space-x-4">  
        <button className="text-blue-600">Yes</button>  
        <button className="text-blue-600">No</button>  
      </div>  
    </section>  
  );  
};  

export default HelpSection;