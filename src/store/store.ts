import { create } from "zustand";
import { MenuStoreType } from "@/store/types";

export const useMenuStore = create<MenuStoreType>((set) => ({
  currentMenu: "Home",
  setCurrentMenu: (newState) => {
    set(() => ({ currentMenu: newState }));
  },
}));
