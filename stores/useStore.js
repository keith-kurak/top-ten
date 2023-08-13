import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

function addPersistMiddleware(config) {
  return persist(config, {
    name: "main-store",
    version: 1,
    storage: createJSONStorage(() => AsyncStorage),
  });
}

const useStore = create(
  addPersistMiddleware((set, get) => ({
    topTen: [
      { id: 1, title: "Fill out financial aid form", notes: "", rank: 1 },
      {
        id: 2,
        title: "Send Slack message about meetup",
        notes: "",
        rank: 2,
      },
      { id: 3, title: "Apply to conferences", notes: "", rank: 3 },
      { id: 4, title: "Get baseball tickets", notes: "", rank: 4 },
      { id: 5, title: "Return hose to Target", notes: "", rank: 5 },
      { id: 6, title: null, notes: null, rank: 6 },
      { id: 7, title: null, notes: null, rank: 7 },
      { id: 8, title: null, notes: null, rank: 8 },
      { id: 9, title: null, notes: null, rank: 9 },
      { id: 10, title: null, notes: null, rank: 10 },
    ],
    history: [],
    updateOrder: (newOrder) =>
      set((state) => {
        const topTenWithNewRanks = [...state.topTen];
        topTenWithNewRanks.forEach((item) => {
          item.rank = newOrder.indexOf(item) + 1;
        });
        return { topTen: topTenWithNewRanks };
      }),
    updateItem: (item) =>
      set((state) => {
        const topTenToUpdate = [...state.topTen];
        const index = topTenToUpdate.findIndex((t) => t.id === item.id);
        topTenToUpdate[index] = item;
        return { topTen: topTenToUpdate };
      }),
    clearItem: (item) => {
      get().updateItem({ ...item, title: null });
    },
    writeHistory: (item, action) =>
      set((state) => {
        const history = [...state.history];
        history.push({ item, action });
        return { history };
      }),
    completeItem: (item) => {
      get().writeHistory(item, "complete");
      get().clearItem(item);
    },
    cancelItem: (item) => {
      get().writeHistory(item, "cancel");
      get().clearItem(item);
    },
  }))
);

export { useStore };
