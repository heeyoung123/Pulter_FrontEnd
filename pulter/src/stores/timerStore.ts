// store/timerStore.ts
import { create } from "zustand";

interface TimerState {
  count: number;
  startTimer: (onComplete: () => void) => void;
  resetTimer: () => void;
}

export const useTimerStore = create<TimerState>((set) => ({
  count: 3,
  startTimer: (onComplete) => {
    const countdown = (currentCount: number) => {
      if (currentCount === 0) {
        onComplete();
        set({ count: 3 });
        return;
      }

      set({ count: currentCount });
      setTimeout(() => countdown(currentCount - 1), 1000);
    };

    countdown(3);
  },
  resetTimer: () => set({ count: 3 }),
}));
