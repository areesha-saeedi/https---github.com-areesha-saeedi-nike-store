// src/app/signup/page.tsx  
import React from 'react';  
import Header from '../components/Header';  
import SignUpForm from '../components/SignUpForm';  
import Footer from '../components/Footer';  

const SignUpPage: React.FC = () => {  
  return (  
    <div>  
      <Header />  
      <SignUpForm />  
      <Footer />  
    </div>  
  );  
};  

export default SignUpPage;