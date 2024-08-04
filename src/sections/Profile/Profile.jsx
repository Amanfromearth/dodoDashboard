import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import useStore from '@/lib/useNameStore';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  contactPhone: z.string().regex(/^\+?[0-9]{10,14}$/, 'Invalid phone number'),
  title: z.string().optional(),
  company: z.string().min(1, 'Company is required'),
  email: z.string().email('Invalid email'),
  country: z.string().min(1, 'Country is required'),
  language: z.string().min(1, 'Language is required'),
  status: z.boolean()
});

const inputClasses = "w-full pl-3 pt-6 pb-2 bg-transparent dark:bg-[#3f3f3f] border dark:border-[#525252] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500";
const errorClasses = "text-red-500 text-sm mt-1";
const labelClasses = "absolute left-3 top-2 text-gray-500 dark:text-slate-400 text-sm transition-all duration-200 pointer-events-none";

const InputField = ({ register, name, placeholder, error, defaultValue = '' }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="relative">
      <input
        {...register(name)}
        placeholder=""
        className={`${inputClasses} ${(isFocused || value) ? 'pt-8' : ''}`}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setValue(e.target.value);
        }}
        defaultValue={defaultValue}
      />
      <label className={`${labelClasses} ${(isFocused || value) ? 'text-xs top-1' : 'top-4'}`}>
        {placeholder}
      </label>
      {error && <p className={errorClasses}>{error.message}</p>}
    </div>
  );
};

const SelectField = ({ register, name, options, error, defaultValue = '' }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="relative">
      <select
        {...register(name)}
        className={`${inputClasses} ${(isFocused || value) ? 'pt-8' : ''}`}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setValue(e.target.value);
        }}
        defaultValue={defaultValue}
      >
        <option value="">Select {name}</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" size={20} />
      <label className={`${labelClasses} ${(isFocused || value) ? 'text-xs top-1' : 'top-4'}`}>
        {name}
      </label>
      {error && <p className={errorClasses}>{error.message}</p>}
    </div>
  );
};


const Profile = () => {
  const { setName } = useStore();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: 'Anurag',
      lastName: 'Bevinal',
      contactPhone: '234567890',
      title: 'SDE',
      company: 'Dodo',
      email: 'dodo@dodo.com',
      country: 'India',
      language: 'English',
      status: true
    }
  });

  const onSubmit = useCallback(async (data) => {
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      setName(data.firstName, data.lastName);
      toast("User Data update Successful")
    } catch (error) {
      toast('Error updating profile');
    }
  }, [setName]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex p-2 sm:p-6">
      <div className='w-full h-fit bg-[#f7f9fb] dark:bg-[#353535] rounded-2xl flex px-4 sm:px-8 py-4 sm:py-5 gap-4 sm:gap-5 flex-col'>
        <span className="flex text-base font-medium gap-1 tracking-tight items-center">
          Profile Details
        </span>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField register={register} name="firstName" placeholder="First Name" error={errors.firstName} />
          <InputField register={register} name="lastName" placeholder="Last Name" error={errors.lastName} />
          <InputField register={register} name="contactPhone" placeholder="Contact Phone" error={errors.contactPhone} />
          <InputField register={register} name="title" placeholder="Title" />
          <InputField register={register} name="company" placeholder="Company" error={errors.company} />
          <InputField register={register} name="email" placeholder="Email" error={errors.email} />
          
          <SelectField 
            register={register} 
            name="country" 
            options={["India", "United States", "France", "UAE"]} 
            error={errors.country}
          />
          
          <SelectField 
            register={register} 
            name="language" 
            options={["English", "French", "Spanish"]} 
            error={errors.language}
          />
        </div>

        <div className='flex sm:flex-row items-center w-full justify-end gap-3'>
          <button type="button" onClick={() => reset()} className="w-fit sm:w-auto mt-4 bg-gray-200 text-black p-2 text-base py-1 rounded-lg hover:bg-gray-300">
            Cancel
          </button>
          <button type="submit" className="w-fit sm:w-auto mt-4 bg-black text-white p-2 text-base py-1 rounded-lg hover:bg-neutral-700">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default Profile;