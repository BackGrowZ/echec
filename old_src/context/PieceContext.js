import { createContext } from "react";
export default createContext({
  pieceSelected: "",
  allPieces: [],
  option: [],
  attack: [],
  oldAllPieces: [],
  updateOption: () => {},
  updateOldAllPieces: () => {},
  updateAllPieces: () => {},
  updateSelectedPiece: () => {},
  updateAttack: () => {},
});
