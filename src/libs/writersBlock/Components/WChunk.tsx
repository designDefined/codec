"use client";

import styles from "./styles.module.scss";
import { Chunk, Pointer } from "../types";
import { useWBlockStore } from "../index";
import { useRef } from "react";

type Props = {
  chunk: Chunk;
  paragraphIndex: number;
  chunkIndex: number;
};

export default function WChunk({ chunk, paragraphIndex, chunkIndex }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const { setPointerText, setPointer } = useWBlockStore(
    (state) => state.pointerMethods,
  );
  const { addNewLine } = useWBlockStore((state) => state.blockMethods);

  return (
    <span
      ref={ref}
      className={styles.Chunk}
      contentEditable={true}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          addNewLine();
        }
      }}
      onInput={(e) => {
        setPointerText(e.target.innerText);
      }}
      onFocus={(e) => {
        setPointer({
          isActive: true,
          text: e.target.innerText,
          paragraphIndex: paragraphIndex,
          chunkIndex: chunkIndex,
        });
      }}
      onBlur={(e) => {}}
    >
      {chunk.text}
    </span>
  );
}
