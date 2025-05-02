// components/ui/InputField.tsx
import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: React.ReactNode;
    rightElement?: React.ReactNode;
  }
  

const InputField: React.FC<InputProps> = ({ 
  id, 
  type = "text", 
  label, 
  placeholder, 
  icon, 
  rightElement,
  className = "",
  ...props 
}) => {
  return (
    <div className="space-y-2">
      {label && <label htmlFor={id} className="block text-white">{label}</label>}
      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`w-full bg-[#FFFFFF14] border-1 border-[#FFFFFF0F]  text-gray-300 rounded-md p-3 ${icon ? 'pl-10' : ''} focus:ring-1 focus:ring-green-400 focus:outline-none ${className}`}
          {...props}
        />
        {icon && (
          <div className="absolute left-3 top-3.5 text-gray-400">
            {icon}
          </div>
        )}
        {rightElement && (
          <div className="absolute right-3 top-3.5 text-gray-400">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
