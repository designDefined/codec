"use client";

import styles from "./TextEditor.module.scss";
import { useRef, useState } from "react";
import { replaceByIndex } from "../../../libs/writersBlock/utility/arrayOperator";

export default function TextEditor() {
  const ref = useRef(null);
  const pointer = useRef<CodecPointer>({
    isWriting: false,
    text: "",
    paragraphIndex: null,
    chunkIndex: null,
  });
  const [currentDocument, setCurrentDocument] = useState<CodecDocument>({
    paragraphs: [{ chunks: [{ text: "안녕하세요" }] }],
  });

  return (
    <div className={styles.TextEditor}>
      {currentDocument.paragraphs.map((paragraph, paragraphIndex) => (
        <div key={paragraphIndex} className={styles.paragraph}>
          {paragraph.chunks.map((chunk, chunkIndex) => (
            <span
              className={styles.chunk}
              key={chunkIndex}
              contentEditable={true}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const newPointer: CodecPointer = {
                    ...pointer.current,
                    text: "",
                    paragraphIndex: pointer.current.paragraphIndex + 1,
                    chunkIndex: 0,
                  };
                  const newDocument: CodecDocument = {
                    ...currentDocument,
                    paragraphs: replaceByIndex(
                      currentDocument.paragraphs,
                      paragraphIndex,
                      [
                        {
                          chunks: replaceByIndex(paragraph.chunks, chunkIndex, {
                            ...chunk,
                            text: pointer.current.text,
                          }),
                        },
                        { chunks: [{ text: "" }] },
                      ],
                    ),
                  };
                  setCurrentDocument(newDocument);
                }
              }}
              onInput={(e) => {
                pointer.current.text = e.target.innerText;
              }}
              onFocus={(e) => {
                pointer.current.text = e.target.innerText;
              }}
              onBlur={(e) => {
                pointer.current.text = "";
              }}
            >
              {chunk.text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
