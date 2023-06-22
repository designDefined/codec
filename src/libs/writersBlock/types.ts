import { ReactNode } from "react";

export type Chunk = {
  text: string;
};

export type Paragraph = {
  chunks: Chunk[];
};

export type Block = {
  paragraphs: Paragraph[];
};

export type Index = [number, number]; //[paragraphIndex, chunkIndex]

export type Pointer = {
  isActive: boolean;
  text: string;
  paragraphIndex: number | null;
  chunkIndex: number | null;
};

export type WBlockController = {};
