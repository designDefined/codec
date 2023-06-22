"use client";

import styles from "./styles.module.scss";
import WParagraph from "./WParagraph";
import { useWBlockStore } from "../index";

export default function WBlock() {
  const block = useWBlockStore((state) => state.blockData);

  return (
    <div className={styles.Block}>
      {block.paragraphs.map((paragraph, paragraphIndex) => (
        <WParagraph
          key={paragraphIndex}
          paragraph={paragraph}
          paragraphIndex={paragraphIndex}
        />
      ))}
    </div>
  );
}
