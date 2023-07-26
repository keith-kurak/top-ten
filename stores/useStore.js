import { create } from "zustand";

const useStore = create((set) => ({
  topTen: [
    { id: 1, title: "Fill out financial aid form", rank: 1 },
    { id: 2, title: "Send Slack message about meetup", rank: 2 },
    { id: 3, title: "Apply to conferences", rank: 3 },
    { id: 4, title: "Get baseball tickets", rank: 4 },
    { id: 5, title: "Return hose to Target", rank: 5 },
    { id: 6, title: null, rank: 6 },
    { id: 7, title: null, rank: 7 },
    { id: 8, title: null, rank: 8 },
    { id: 9, title: null, rank: 9 },
    { id: 10, title: null, rank: 10 },
  ],
  updateOrder: (newOrder) =>
    set((state) => {
      const topTenWithNewRanks = [...state.topTen];
      topTenWithNewRanks.forEach((item) => {
        item.rank = newOrder.indexOf(item) + 1;
      });
      return { topTen: topTenWithNewRanks };
    }),
}));

export { useStore };
