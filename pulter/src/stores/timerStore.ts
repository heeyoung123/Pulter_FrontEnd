import { create } from "zustand";

interface TimerState {
  count: number;
  startTimer: (onComplete: () => void) => void;
  resetTimer: () => void;
}
export const useTimerStore = create<TimerState>((set) => ({
  count: 3,
  startTimer: (onComplete) => {
    let timer: NodeJS.Timeout | null = null;
    const countdown = () => {
      set((state) => {
        if (state.count === 1) {
          clearTimeout(timer!);
          onComplete();
          return { count: 3 };
        }
        return { count: state.count - 1 };
      });
    };
    timer = setInterval(countdown, 1000);
  },
  resetTimer: () => set({ count: 3 }),
}));
