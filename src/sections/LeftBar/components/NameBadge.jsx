'use client';

import React, { useEffect } from 'react';
import Avatar from "boring-avatars";
import useStore from '@/lib/useNameStore';



const NameBadge = () => {
  const { firstName, lastName, setName } = useStore();

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await fetch('/api/profile');
        const data = await response.json();
        setName(data.firstName, data.lastName);
      } catch (error) {
        console.error('Error fetching name:', error);
      }
    };

    if (!firstName || !lastName) {
      fetchName();
    }
  }, [firstName, lastName, setName]);

  const fullName = `${firstName} ${lastName}`;

  if (!firstName && !lastName) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full gap-1 mb-3 items-center">
      <Avatar 
        name={fullName} 
        size={23} 
        colors={["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"]}  
        variant="beam"
      />
      <span>{firstName}</span>
    </div>
  )
}

export default NameBadge;