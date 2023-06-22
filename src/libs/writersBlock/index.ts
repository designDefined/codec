import { create } from "zustand";
import { Block, Pointer } from "./types";
import { useEffect } from "react";
import WBlock from "./Components/WBlock";
import { insertByIndex, replaceByIndex } from "./utility/arrayOperator";
import { text } from "stream/consumers";

type WBlockStore = {
  blockData: Block;
  currentIndex: { paragraphIndex: number | null; chunkIndex: number | null };
  currentText: { isEditing: boolean; text: string };
  setBlockData: (blockData: Block) => void;

  indexMethods: {
    resetIndex: () => void;
    setIndex: (paragraphIndex: number, chunkIndex: number) => void;
  };
  textMethods: {
    resetText: () => void;
    setText: (text: string) => void;
  };
  blockMethods: {
    addNewLine: () => void;
  };
};

export const useWBlockStore = create<WBlockStore>()((set, get) => ({
  blockData: { paragraphs: [{ chunks: [{ text: "write!" }] }] },
  currentIndex: { paragraphIndex: null, chunkIndex: null },
  currentText: { isEditing: false, text: "" },
  setBlockData: (blockData) => set({ blockData }),
  indexMethods: {
    resetIndex: () =>
      set({ currentIndex: { paragraphIndex: null, chunkIndex: null } }),
    setIndex: (paragraphIndex, chunkIndex) =>
      set({ currentIndex: { paragraphIndex, chunkIndex } }),
  },
  textMethods: {
    resetText: () => set({ currentText: { isEditing: false, text: "" } }),
    setText: (text) => set({ currentText: { isEditing: true, text } }),
  },
  blockMethods: {
    addNewLine: () => {
      const block = get().blockData;
      const currentIndex = get().currentIndex;
      const currentText = get().currentText;
      if (
        currentText.isEditing &&
        currentIndex.paragraphIndex !== null &&
        currentIndex.chunkIndex !== null
      ) {
        const paragraph = block.paragraphs[currentIndex.paragraphIndex];
        const chunk = paragraph.chunks[currentIndex.chunkIndex];
        const newBlock: Block = {
          ...block,
          paragraphs: replaceByIndex(
            block.paragraphs,
            currentIndex.paragraphIndex,
            [
              {
                chunks: replaceByIndex(
                  paragraph.chunks,
                  currentIndex.chunkIndex,
                  {
                    ...chunk,
                    text: currentText.text,
                  },
                ),
              },
              { chunks: [{ text: "asdf" }] },
            ],
          ),
        };
        set({ blockData: newBlock });
      } else {
        const newBlock: Block = {
          ...block,
          paragraphs: insertByIndex(block.paragraphs, block.paragraphs.length, {
            chunks: [{ text: "ERROR!" }],
          }),
        };
        set({ blockData: newBlock });
      }
    },
  },
}));
