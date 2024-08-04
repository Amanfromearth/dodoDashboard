import { create } from 'zustand';

const usePageStore = create((set) => ({
  selectedPage: "Get Started",
  selectedMainPage: null,
  openPages: {},
  setSelectedPage: (page, mainPage) => set({ 
    selectedPage: page, 
    selectedMainPage: mainPage || null
  }),
  togglePage: (index) => set((state) => ({
    openPages: {
      ...state.openPages,
      [index]: !state.openPages[index]
    }
  })),
}));

export default usePageStore;