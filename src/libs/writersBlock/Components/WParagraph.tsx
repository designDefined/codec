"use client";

import { Paragraph } from "../types";
import styles from "./styles.module.scss";
import WChunk from "./WChunk";

type Props = {
  paragraph: Paragraph;
  paragraphIndex: number;
};

export default function WParagraph({ paragraph, paragraphIndex }: Props) {
  return (
    <div className={styles.Paragraph}>
      {paragraph.chunks.map((chunk, chunkIndex) => (
        <WChunk
          key={chunkIndex}
          chunk={chunk}
          paragraphIndex={paragraphIndex}
          chunkIndex={chunkIndex}
        />
      ))}
    </div>
  );
}
