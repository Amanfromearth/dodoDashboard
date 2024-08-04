import { ChevronDown } from 'lucide-react';

const inputClasses = "w-full pl-3 py-2 bg-transparent dark:bg-[#3f3f3f] border dark:border-[#525252] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500";
const errorClasses = "text-red-500 text-sm mt-1";

export const InputField = ({ register, name, placeholder, error }) => (
  <div className="relative">
    <input
      {...register(name)}
      placeholder={placeholder}
      className={inputClasses}
    />
    {error && <p className={errorClasses}>{error.message}</p>}
  </div>
);

export const SelectField = ({ register, name, options, error }) => (
  <div className="relative">
    <select
      {...register(name)}
      className={inputClasses}
    >
      <option value="">{`Select ${name}`}</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" size={20} />
    {error && <p className={errorClasses}>{error.message}</p>}
  </div>
);