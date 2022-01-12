import React, { useState } from "react";
import CreateDamier from "../components/CreateDamier";
import Pieces from "./Pieces";
import PieceContext from "../context/PieceContext";
import { allPiece } from "../utils";

const Plateau = () => {
  const [allPieces, setAllPieces] = useState(allPiece);
  const [pieceSelected, setPieceSelected] = useState(null);

  const pieceContextValue = {
    pieceSelected,
    allPieces,
    updateAllPieces: setAllPieces,
    updateSelectedPiece: setPieceSelected,
  };

  return (
    <PieceContext.Provider value={pieceContextValue}>
      <div className="cadre">
        <div className="plateau">
          <CreateDamier />
          <Pieces />
        </div>
      </div>
    </PieceContext.Provider>
  );
};

export default Plateau;
