// src/app/login/page.tsx  
import React from 'react';  
import Header from '../Components/Header';  
import LoginForm from '../Components/LoginForm';  
import Footer from '../Components/Footer';  

const LoginPage: React.FC = () => {  
  return (  
    <div>  
      <Header />  
      <LoginForm />  
      <Footer />  
    </div>  
  );  
};  

export default LoginPage;