"use client"
import React from 'react';
import usePageStore from '@/lib/useStore';

const FavoriteLabel = ({ children, onClick, isSelected }) => (
  <div 
    className={`flex items-center w-full gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors ${isSelected ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
    onClick={onClick}
  >
    <div className={`p-1 w-1 h-1 rounded-full ${isSelected ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-gray-400'}`} />
    <span className={`font-normal text-sm ${isSelected ? 'text-blue-500 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
      {children}
    </span>
  </div>
);

const Favorites = () => {
  const { selectedPage, setSelectedPage } = usePageStore();

  const favorites = [
    { name: "Dashboard", mainPage: null },
    { name: "Transactions", mainPage: null },
  ];

  return (
    <div className="flex flex-col py-2 gap-1 items-center">
      <div className="flex text-sm mb-2 gap-2">
        <span className="text-slate-500 dark:text-slate-400">Favorites</span>
        <span className="text-slate-300 dark:text-slate-600">Recently</span>
      </div>
      {favorites.map((favorite) => (
        <FavoriteLabel 
          key={favorite.name}
          isSelected={selectedPage === favorite.name}
          onClick={() => setSelectedPage(favorite.name, favorite.mainPage)}
        >
          {favorite.name}
        </FavoriteLabel>
      ))}
    </div>
  );
};

export default Favorites;