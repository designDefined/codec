import store, { WBStore } from "./store";
import { pipe } from "next/dist/build/webpack/config/utils";
import { Block, Index } from "./types";

type WBStoreFunction = (store: WBStore) => WBStore;

const get = store.getState;
const set = store.setState;

const manipulate: (value,index: Index) => (block: Block) => Block =
  (index) => (block) =>
      ({...block, paragraphs:block.paragraphs.map(()=>)});

const updateCache: WBStoreFunction = (store) => null;
const insertEmptyParagraph = () => null;
const insertEmptyChunk = () => null;
const setFocus = () => null;

const onPressEnter = pipe(updateCache, insertEmptyParagraph, setFocus);
