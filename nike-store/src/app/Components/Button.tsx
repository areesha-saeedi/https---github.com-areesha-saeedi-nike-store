// src/app/components/Button.tsx  
import React from 'react';  

interface ButtonProps {  
  children: React.ReactNode; // for button text or elements  
  onClick?: () => void;      // optional click handler  
  variant?: 'primary' | 'secondary' | 'outline'; // styling variants  
  disabled?: boolean;         // to enable or disable the button  
  className?: any;        // for additional custom styles  
}  

const Button: React.FC<ButtonProps> = ({  
  children,  
  onClick,  
  variant = 'primary', // default variant  
  disabled = false,  
  className = '',  
}) => {  
  // Define base styles  
  const baseStyles = 'py-2 px-4 rounded transition duration-300 ease-in-out';  
  
  // Define variant styles  
  const variantStyles = {  
    primary: 'bg-blue-600 text-white hover:bg-blue-700',  
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',  
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',  
  };  

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;  
  
  return (  
    <Button  
      className={styles}  
      onClick={onClick}
      disabled={disabled}  
      aria-disabled={disabled}  
    >  
      {children}  
    </Button>  
  );  
};  

export default Button;