type CodecChunk = {
  text: string;
};

type CodecParagraph = {
  chunks: CodecChunk[];
};

type CodecDocument = { paragraphs: CodecParagraph[] };

type CodecPointer = {
  isWriting: boolean;
  text: string;
  paragraphIndex: number | null;
  chunkIndex: number | null;
};
