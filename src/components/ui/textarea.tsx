// src/components/ui/textarea.tsx
import React from 'react';

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ 
  className = '',
  ...props 
}) => {
  return (
    <textarea 
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors min-h-[100px] resize-none ${className}`} 
      {...props}
    />
  );
};

export default Textarea;