import { create } from "zustand";
import { Block, Index } from "./types";

export type WBStore = {
  blockData: Block;
  focusCache: {
    active: boolean;
    index: Index | null; //[paragraphIndex, chunkIndex]
    text: string;
  };
};

const initialBlockData = { paragraphs: [{ chunks: [{ text: "" }] }] };

const store = create<WBStore>((set) => ({
  blockData: initialBlockData,
  focusCache: { active: false, index: null, text: "" },
}));

export default store;
