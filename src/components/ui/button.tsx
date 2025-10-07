// src/components/ui/button.tsx
import React from 'react';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <button 
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;  // ✅ MUDEI AQUI - export default