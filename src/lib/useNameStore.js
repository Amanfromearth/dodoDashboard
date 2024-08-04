import { create } from "zustand";
const useStore = create((set) => ({
  firstName: "",
  lastName: "",
  setName: (firstName, lastName) => set({ firstName, lastName }),
}));

export default useStore;
