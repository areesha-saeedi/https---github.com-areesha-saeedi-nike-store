// src/app/get-help/page.tsx  
import React from 'react';  
import Header from '../Components/Header';  
import HelpSection from '../Components/HelpSection';  
import ContactUs from '../Components/ContactUs';  
import Footer from '../Components/Footer';  

const GetHelpPage: React.FC = () => {  
  return (  
    <div>  
      <Header />  
      <HelpSection />  
      <ContactUs />  
      <Footer />  
    </div>  
  );  
};  

export default GetHelpPage;