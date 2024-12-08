// src/app/components/LoginForm.tsx  
import React from 'react';  

const LoginForm: React.FC = () => {  
  return (  
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">  
      <h2 className="text-center text-xl font-bold mb-4">YOUR ACCOUNT FOR EVERYTHING NIKE</h2>  
      <form>  
        <div className="mb-4">  
          <label className="block mb-1" htmlFor="email">Email address</label>  
          <input  
            type="email"  
            id="email"  
            placeholder="Email address"  
            className="w-full p-2 border rounded"  
            required  
          />  
        </div>  
        <div className="mb-4">  
          <label className="block mb-1" htmlFor="password">Password</label>  
          <input  
            type="password"  
            id="password"  
            placeholder="Password"  
            className="w-full p-2 border rounded"  
            required  
          />  
        </div>  
        <div className="flex items-center mb-4">  
          <input type="checkbox" id="keep-signed-in" className="mr-2" />  
          <label htmlFor="keep-signed-in">Keep me signed in</label>  
        </div>  
        <button type="submit" className="w-full bg-black text-white font-semibold py-2 rounded">  
          SIGN IN  
        </button>  
        <div className="text-center mt-4">  
          <a href="#" className="text-blue-600 hover:underline">Forgot your password?</a>  
        </div>  
        <div className="text-center mt-4">  
          <p>Not a Member? <a href="#" className="text-blue-600 hover:underline">Join Us.</a></p>  
        </div>  
      </form>  
    </div>  
  );  
};  

export default LoginForm;