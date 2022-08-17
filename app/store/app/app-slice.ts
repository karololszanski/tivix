import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LegoMinifig, LegoParts } from "utils/interfaces";

export interface AppState {
  minifigs: Array<LegoMinifig>;
  selectedStep: number;
}

const initialState: AppState = {
  minifigs: [],
  selectedStep: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    selectMinifig(
      state,
      action: PayloadAction<{
        minifig: LegoMinifig;
      }>
    ) {
      state.minifigs = state.minifigs.map((item) => {
        return {
          ...item,
          selected: item.set_num === action.payload.minifig?.set_num,
        };
      });
    },
    addMinifig(
      state,
      action: PayloadAction<{
        minifig: LegoMinifig;
      }>
    ) {
      state.minifigs.push({
        ...action.payload.minifig,
        selected: false,
        parts: null,
      });
    },
    addPartsToMinifig(
      state,
      action: PayloadAction<{
        minifig: LegoMinifig;
        parts: LegoParts;
      }>
    ) {
      const minifig = state.minifigs.find(
        (item) => item.set_num === action.payload.minifig?.set_num
      );
      if (minifig) {
        minifig.parts = action.payload.parts;
      }
    },
    setStep(
      state,
      action: PayloadAction<{
        stepNumber: number;
      }>
    ) {
      if (action.payload.stepNumber === 0) {
        state.minifigs = [];
      }
      state.selectedStep = action.payload.stepNumber;
    },
  },
});

export const { selectMinifig, addMinifig, addPartsToMinifig, setStep } =
  appSlice.actions;
export default appSlice.reducer;
