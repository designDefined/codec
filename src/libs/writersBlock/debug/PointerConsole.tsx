"use client";
import { useWBlockStore } from "../index";

export default function PointerConsole() {
  const pointer = useWBlockStore((state) => state.pointer);
  return (
    <div>
      내용: {pointer.text} 문단: {pointer.paragraphIndex ?? 0} 청크:
      {pointer.chunkIndex}
    </div>
  );
}
