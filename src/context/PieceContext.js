import { createContext } from "react";
export default createContext({
  pieceSelected: "",
  allPieces: [],
  updateAllPieces: () => {},
  updateSelectedPiece: () => {},
});
