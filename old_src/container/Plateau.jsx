import React, { useState } from "react";
import CreateDamier from "../components/CreateDamier";
import Pieces from "./Pieces";
import PieceContext from "../context/PieceContext";
import { allPiece } from "../utils";

const Plateau = () => {
  const [oldAllPieces, setOldAllPieces] = useState([]);
  const [allPieces, setAllPieces] = useState(allPiece);
  const [pieceSelected, setPieceSelected] = useState(null);
  const [option, setOption] = useState([]);
  const [attack, setAttack] = useState([]);

  const pieceContextValue = {
    pieceSelected,
    allPieces,
    option,
    attack,
    oldAllPieces,
    updateOption: setOption,
    updateOldAllPieces: () => setOldAllPieces(allPieces),
    updateAllPieces: setAllPieces,
    updateSelectedPiece: setPieceSelected,
    updateAttack: setAttack,
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
