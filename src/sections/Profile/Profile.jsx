import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import useStore from '@/lib/useNameStore';
import { profileSchema } from './profileSchema';
import { InputField, SelectField } from './FormFields';

const Profile = () => {
  const { setName } = useStore();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(profileSchema)
  });

  const onSubmit = useCallback(async (data) => {

    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await response.json(); 
      setName(data.firstName, data.lastName);
      toast.success("User Data update Successful");
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error(`Error updating profile: ${error.message}`);
    }
  }, [setName]);
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex p-2 mt-5 sm:p-6">
      <div className='w-full h-fit bg-[#f7f9fb] dark:bg-[#353535] rounded-2xl flex px-4 sm:px-8 py-4 sm:py-5 gap-4 sm:gap-5 flex-col'>
        <span className="flex text-base font-medium gap-1 tracking-tight items-center">
         Update Profile Details
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