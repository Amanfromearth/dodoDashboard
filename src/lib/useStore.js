import { create } from 'zustand';

const usePageStore = create((set) => ({
  selectedPage: "Dashboard",
  selectedMainPage: null,
  openPages: {},
  favorites: ["Dashboard", "Transactions"],
  recentPages: [],
  
  setSelectedPage: (page, mainPage) => set((state) => {
    const newRecentPages = [page, ...state.recentPages.filter(p => p !== page)].slice(0, 5);
    return {
      selectedPage: page,
      selectedMainPage: mainPage || null,
      recentPages: newRecentPages
    };
  }),
  
  togglePage: (index) => set((state) => ({
    openPages: {
      ...state.openPages,
      [index]: !state.openPages[index]
    }
  })),
  
  toggleFavorite: (page) => set((state) => {
    const newFavorites = state.favorites.includes(page)
      ? state.favorites.filter(p => p !== page)
      : [...state.favorites, page];
    return { favorites: newFavorites };
  }),
}));

export default usePageStore;